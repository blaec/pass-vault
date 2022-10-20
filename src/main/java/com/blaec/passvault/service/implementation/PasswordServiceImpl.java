package com.blaec.passvault.service.implementation;

import com.blaec.passvault.enums.HealthType;
import com.blaec.passvault.enums.PasswordStrength;
import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.PasswordHistory;
import com.blaec.passvault.model.passGenerator.PasswordValidation;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.BaseItemTo;
import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.model.to.item.PasswordTo;
import com.blaec.passvault.repository.FolderRepository;
import com.blaec.passvault.repository.ItemRepository;
import com.blaec.passvault.repository.PasswordHistoryRepository;
import com.blaec.passvault.repository.PasswordRepository;
import com.blaec.passvault.service.ItemService;
import com.blaec.passvault.service.PasswordService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.function.BooleanSupplier;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static java.util.stream.Collectors.groupingBy;

@Slf4j
@AllArgsConstructor
@Service
public class PasswordServiceImpl implements ItemService<Password>, PasswordService {
    private final ItemRepository<Password> globalPasswordRepository;
    private final PasswordRepository passwordRepository;
    private final FolderRepository folderRepository;
    private final PasswordHistoryRepository passwordHistoryRepository;
    public static final int MAX_RECOMMENDED_AGE = 180;

    @Override
    public Iterable<Password> getAllActive() {
        return globalPasswordRepository.getAllActive();
    }

    @Override
    public Iterable<Password> getAllDeleted() {
        return globalPasswordRepository.getAllDeleted();
    }

    @Override
    public Iterable<Password> getAllByFolderId(int folderId) {
        return globalPasswordRepository.getAllByFolderId(folderId);
    }

    @Override
    public Response.Builder create(FullItemTo to) {
        return save(createPasswordFrom(to), "Password for {} successfully saved");
    }

    @Override
    public Response.Builder update(FullItemTo to) {
        return save(createPasswordFrom(to), "Password for {} successfully updated");
    }

    private Password createPasswordFrom(FullItemTo to) {
        Folder folder = folderRepository.getById(to.getFolderId()).orElse(null);
        return Password.from(to, Objects.requireNonNull(folder, "folder not supplied"));
    }

    private Response.Builder save(Password password, String message) {
        Password oldPassword = passwordRepository.getById(password.getId()).orElse(null);
        if (!Objects.isNull(oldPassword)) {
            try {
                oldPassword = (Password) oldPassword.clone();
            } catch (CloneNotSupportedException e) {
                e.printStackTrace();
            }
        }

        Response.Builder savedPassword = ItemServiceUtils.save(() -> {
            Password saved = globalPasswordRepository.save(password);
            log.info(message, saved.getTitle());
        });
        savePasswordHistory(password, oldPassword).accept(savedPassword);

        return savedPassword;
    }

    private Consumer<Response.Builder> savePasswordHistory(Password password, Password oldPassword) {
        boolean isPasswordChanged = !Objects.isNull(oldPassword)
                && !oldPassword.getPassword().equals(password.getPassword());
        if (isPasswordChanged) {
            try {
                PasswordHistory savedHistory = passwordHistoryRepository.save(PasswordHistory.from(password, oldPassword));
                log.info("New password history object {} successfully created", savedHistory.getPassword().getTitle());
                return (Response.Builder response) -> response.updateMessage(" | success - password history", true);
            } catch (Exception e) {
                log.error("failed to save password history for password " + password.getId(), e);
                return (Response.Builder response) -> response.updateMessage(" | failure - password history", false);
            }
        }

        // do nothing - it is new password or password value wasn't updated
        return (Response.Builder response) -> response.updateMessage("", true);
    }

    @Override
    public Response.Builder restoreFromTrash(int id) {
        BooleanSupplier isRestoredFromTrash = () -> globalPasswordRepository.isRestoredFromTrash(id);
        String message = String.format("restored | password with id %d", id);

        return ItemServiceUtils.handleExistingItem(isRestoredFromTrash, message);
    }

    @Override
    public Response.Builder moveToTrash(int id) {
        BooleanSupplier isMovedToTrash = () -> globalPasswordRepository.isMovedToTrash(id);
        String message = String.format("moved to trash | password with id %d", id);

        return ItemServiceUtils.handleExistingItem(isMovedToTrash, message);
    }

    @Override
    public Response.Builder delete(int id) {
        passwordHistoryRepository.isDeleted(id);    // TODO maybe need some info about it
        BooleanSupplier isDeleted = () -> globalPasswordRepository.isDeleted(id);
        String message = String.format("deleted | password with id %d", id);

        return ItemServiceUtils.handleExistingItem(isDeleted, message);
    }

    @Override
    public Map<HealthType, Iterable<BaseItemTo>> getAllHealthPasswords() {
        Iterable<Password> allPasswords = globalPasswordRepository.getAllActive();
        List<BaseItemTo> weakPasswords = StreamSupport.stream(allPasswords.spliterator(), false)
                .filter(p -> PasswordValidation.getPasswordStrength(p.getPassword()) == PasswordStrength.weak)
                .map(PasswordTo::from)
                .collect(Collectors.toList());

        List<BaseItemTo> reusedPasswords = StreamSupport.stream(allPasswords.spliterator(), false)
                .collect(groupingBy(Password::getPassword)).values().stream()
                .filter(list -> list.size() > 1)
                .flatMap(Collection::stream)
                .map(PasswordTo::from)
                .collect(Collectors.toList());

        final LocalDate now = LocalDate.now();
        List<BaseItemTo> oldPasswords = StreamSupport.stream(allPasswords.spliterator(), false)
                .filter(p -> ChronoUnit.DAYS.between(p.getCreationDate(), now) >= MAX_RECOMMENDED_AGE)
                .map(PasswordTo::from)
                .collect(Collectors.toList());


        return Map.of(
                HealthType.weak, weakPasswords,
                HealthType.reused, reusedPasswords,
                HealthType.old, oldPasswords
        );
    }
}
