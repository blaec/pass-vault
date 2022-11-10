package com.blaec.passvault.service.implementation;

import com.blaec.passvault.enums.HealthType;
import com.blaec.passvault.enums.PasswordStrength;
import com.blaec.passvault.model.BaseItem;
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
import com.blaec.passvault.service.ItemService;
import com.google.common.collect.Iterables;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.BooleanSupplier;
import java.util.function.Consumer;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static java.util.stream.Collectors.groupingBy;

@Slf4j
@AllArgsConstructor
@Service
public class PasswordServiceImpl implements ItemService<Password> {
    private final ItemRepository<Password> passwordRepository;
    private final FolderRepository folderRepository;
    private final PasswordHistoryRepository passwordHistoryRepository;

    @Override
    public Iterable<Password> getAllActive() {
        return passwordRepository.getAllActive();
    }

    @Override
    public Iterable<Password> getAllDeleted() {
        return passwordRepository.getAllDeleted();
    }

    @Override
    public Iterable<Password> getAllByFolderId(int folderId) {
        return passwordRepository.getAllByFolderId(folderId);
    }

    @Override
    public Response.Builder create(FullItemTo to) {
        return save(createPasswordFrom(to), String.format("Password %s successfully saved", to.getTitle()));
    }

    @Override
    public Response.Builder update(FullItemTo to) {
        return save(createPasswordFrom(to), String.format("Password %s successfully updated", to.getTitle()));
    }

    private Password createPasswordFrom(FullItemTo to) {
        Folder folder = folderRepository.getById(to.getFolderId()).orElse(null);
        return Password.from(to, Objects.requireNonNull(folder, "folder not supplied"));
    }

    private Response.Builder save(Password password, String message) {
        Password previousPassword = password.isNew()
                ? null
                : passwordRepository.getById(password.getId()).orElse(null);
        password.resetCreationDate(previousPassword);

        Response.Builder response = ItemServiceUtils.save(() -> passwordRepository.save(password), message);
        savePasswordHistory(previousPassword).accept(response);

        return response;
    }

    private Consumer<Response.Builder> savePasswordHistory(Password previousPassword) {
        boolean isNewPassword = Objects.isNull(previousPassword) || !previousPassword.isPasswordChanged();
        if (isNewPassword) {
            return (Response.Builder response) -> response.updateMessage("", true);
        }

        try {
            PasswordHistory savedHistory = passwordHistoryRepository.save(PasswordHistory.from(previousPassword));
            log.info("New password history object {} successfully created", savedHistory.getPassword().getTitle());
            return (Response.Builder response) -> response.updateMessage(" | success - password history", true);
        } catch (Exception e) {
            log.error("failed to save password history for password " + previousPassword.getId(), e);
            return (Response.Builder response) -> response.updateMessage(" | failure - password history", false);
        }
    }

    @Override
    public Response.Builder restoreFromTrash(int id) {
        BooleanSupplier isRestoredFromTrash = () -> passwordRepository.isRestoredFromTrash(id);
        String message = String.format("restored | password with id %d", id);

        return ItemServiceUtils.handleExistingItem(isRestoredFromTrash, message);
    }

    @Override
    public Response.Builder moveToTrash(int id) {
        BooleanSupplier isMovedToTrash = () -> passwordRepository.isMovedToTrash(id);
        String message = String.format("moved to trash | password with id %d", id);

        return ItemServiceUtils.handleExistingItem(isMovedToTrash, message);
    }

    @Override
    public Response.Builder delete(int id) {
        if (passwordHistoryRepository.isDeleted(id)) {
            log.info("all password history for password " + id + " is deleted");
        }
        BooleanSupplier isDeleted = () -> passwordRepository.isDeleted(id);
        String message = String.format("deleted | password with id %d", id);

        return ItemServiceUtils.handleExistingItem(isDeleted, message);
    }

    @Override
    public boolean emptyTrash() {
        Iterable<Password> passwordsInTrash = passwordRepository.getAllDeleted();
        List<Integer> deletedPasswordIds = StreamSupport.stream(passwordsInTrash.spliterator(), false)
                .map(BaseItem::getId).toList();
        boolean isHistoryRemoved = passwordHistoryRepository.hasNoHistory(deletedPasswordIds)
                || passwordHistoryRepository.isDeletedByIds(deletedPasswordIds);
        Supplier<Integer> itemsRemoved = passwordRepository::emptyTrash;

        return ItemServiceUtils.handleTrashEmpty(Iterables.size(passwordsInTrash), isHistoryRemoved, itemsRemoved, "passwords");
    }

    @Override
    public Map<HealthType, Iterable<BaseItemTo>> getAllHealthPasswords() {
        Iterable<Password> allPasswords = passwordRepository.getAllActive();
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
                .filter(p -> ChronoUnit.DAYS.between(p.getCreationDate(), now) >= p.getAge())
                .map(PasswordTo::from)
                .collect(Collectors.toList());


        return Map.of(
                HealthType.weak, weakPasswords,
                HealthType.reused, reusedPasswords,
                HealthType.old, oldPasswords
        );
    }
}
