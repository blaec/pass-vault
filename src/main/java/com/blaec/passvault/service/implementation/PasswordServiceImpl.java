package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.password.PasswordTo;
import com.blaec.passvault.repository.FolderRepository;
import com.blaec.passvault.repository.ItemRepository;
import com.blaec.passvault.service.ItemService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.function.BooleanSupplier;
import java.util.function.Supplier;

@Slf4j
@AllArgsConstructor
@Service
public class PasswordServiceImpl implements ItemService<Password, PasswordTo> {
    private final ItemRepository<Password> passwordRepository;
    private final FolderRepository folderRepository;

    @Override
    public Iterable<Password> getAll() {
        return passwordRepository.getAll();
    }

    @Override
    public Iterable<Password> getAllByFolderId(int folderId) {
        return passwordRepository.getAllByFolderId(folderId);
    }

    @Override
    public Response.Builder create(PasswordTo to) {
        return save(createPasswordFrom(to), "Password for {} successfully saved");
    }

    @Override
    public Response.Builder update(PasswordTo to) {
        return save(createPasswordFrom(to), "Password for {} successfully updated");
    }

    private Password createPasswordFrom(PasswordTo to) {
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
}
