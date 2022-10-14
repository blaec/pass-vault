package com.blaec.passvault.service.implementation;

import com.blaec.passvault.enums.HealthType;
import com.blaec.passvault.enums.PasswordStrength;
import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.passGenerator.PasswordValidation;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.BaseItemTo;
import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.model.to.item.PasswordTo;
import com.blaec.passvault.repository.FolderRepository;
import com.blaec.passvault.repository.ItemRepository;
import com.blaec.passvault.service.ItemService;
import com.blaec.passvault.service.PasswordService;
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
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static java.util.stream.Collectors.groupingBy;

@Slf4j
@AllArgsConstructor
@Service
public class PasswordServiceImpl implements ItemService<Password>, PasswordService {
    private final ItemRepository<Password> passwordRepository;
    private final FolderRepository folderRepository;
    public static final int MAX_RECOMMENDED_AGE = 180;

    @Override
    public Iterable<Password> getAll() {
        return passwordRepository.getAll();
    }

    @Override
    public Iterable<Password> getAllByFolderId(int folderId) {
        return passwordRepository.getAllByFolderId(folderId);
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
        return ItemServiceUtils.save(() -> {
            Password saved = passwordRepository.save(password);
            log.info(message, saved.getTitle());
        });
    }

    @Override
    public Response.Builder delete(int id) {
        BooleanSupplier idDeleted = () -> passwordRepository.isDeleted(id);
        Supplier<String> logSuccess = () -> {
            String message = String.format("deleted | password with id %d", id);
            log.info(message);

            return message;
        };

        return ItemServiceUtils.delete(idDeleted, logSuccess);
    }

    @Override
    public Map<HealthType, Iterable<BaseItemTo>> getAllHealthPasswords() {
        Iterable<Password> allPasswords = passwordRepository.getAll();
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
