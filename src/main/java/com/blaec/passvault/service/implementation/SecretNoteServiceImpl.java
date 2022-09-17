package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.SecretNote;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.model.to.secretNote.SecretNoteTo;
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
public class SecretNoteServiceImpl implements ItemService<SecretNote> {
    private final ItemRepository<SecretNote> secretNoteRepository;
    private final FolderRepository folderRepository;

    @Override
    public Iterable<SecretNote> getAll() {
        return secretNoteRepository.getAll();
    }

    @Override
    public Iterable<SecretNote> getAllByFolderId(int folderId) {
        return secretNoteRepository.getAllByFolderId(folderId);
    }

    @Override
    public Response.Builder create(FullItemTo to) {
        return save(createSecretNoteFrom(to), "Secret note for {} successfully saved");
    }

    @Override
    public Response.Builder update(FullItemTo to) {
        return save(createSecretNoteFrom(to), "Password for {} successfully updated");
    }

    private SecretNote createSecretNoteFrom(FullItemTo to) {
        Folder folder = folderRepository.getById(to.getFolderId()).orElse(null);
        return SecretNote.from(to, Objects.requireNonNull(folder, "folder not supplied"));
    }

    private Response.Builder save(SecretNote secretNote, String message) {
        return ItemServiceUtils.save(() -> {
            SecretNote saved = secretNoteRepository.save(secretNote);
            log.info(message, saved.getTitle());
        });
    }

    @Override
    public Response.Builder delete(int id) {
        BooleanSupplier idDeleted = () -> secretNoteRepository.isDeleted(id);
        Supplier<String> logSuccess = () -> {
            String message = String.format("deleted | secret note with id %d", id);
            log.info(message);

            return message;
        };

        return ItemServiceUtils.delete(idDeleted, logSuccess);
    }
}
