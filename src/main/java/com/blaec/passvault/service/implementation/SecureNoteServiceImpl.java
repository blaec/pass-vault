package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.SecureNote;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.repository.FolderRepository;
import com.blaec.passvault.repository.ItemRepository;
import com.blaec.passvault.service.ItemService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.function.BooleanSupplier;

@Slf4j
@AllArgsConstructor
@Service
public class SecureNoteServiceImpl implements ItemService<SecureNote> {
    private final ItemRepository<SecureNote> secureNoteRepository;
    private final FolderRepository folderRepository;

    @Override
    public Iterable<SecureNote> getAllActive() {
        return secureNoteRepository.getAllActive();
    }

    @Override
    public Iterable<SecureNote> getAllDeleted() {
        return secureNoteRepository.getAllDeleted();
    }

    @Override
    public Iterable<SecureNote> getAllByFolderId(int folderId) {
        return secureNoteRepository.getAllByFolderId(folderId);
    }

    @Override
    public Response.Builder create(FullItemTo to) {
        return save(createSecureNoteFrom(to), "Secure note for {} successfully saved");
    }

    @Override
    public Response.Builder update(FullItemTo to) {
        return save(createSecureNoteFrom(to), "Password for {} successfully updated");
    }

    private SecureNote createSecureNoteFrom(FullItemTo to) {
        Folder folder = folderRepository.getById(to.getFolderId()).orElse(null);
        return SecureNote.from(to, Objects.requireNonNull(folder, "folder not supplied"));
    }

    private Response.Builder save(SecureNote secureNote, String message) {
        return ItemServiceUtils.save(() -> {
            SecureNote saved = secureNoteRepository.save(secureNote);
            log.info(message, saved.getTitle());
        });
    }

    @Override
    public Response.Builder restore(int id) {
        BooleanSupplier isRestoredFromTrash = () -> secureNoteRepository.isRestoredFromTrash(id);
        String message = String.format("restored | secure note with id %d", id);

        return ItemServiceUtils.handleExistingItem(isRestoredFromTrash, message);
    }

    @Override
    public Response.Builder moveToTrash(int id) {
        BooleanSupplier isMovedToTrash = () -> secureNoteRepository.isMovedToTrash(id);
        String message = String.format("moved to trash | secure note with id %d", id);

        return ItemServiceUtils.handleExistingItem(isMovedToTrash, message);
    }

    @Override
    public Response.Builder delete(int id) {
        BooleanSupplier isDeleted = () -> secureNoteRepository.isDeleted(id);
        String message = String.format("deleted | secure note with id %d", id);

        return ItemServiceUtils.handleExistingItem(isDeleted, message);
    }
}
