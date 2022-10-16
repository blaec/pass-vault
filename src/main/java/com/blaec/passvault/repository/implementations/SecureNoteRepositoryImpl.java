package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.SecureNote;
import com.blaec.passvault.repository.ItemRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@AllArgsConstructor
@Repository
public class SecureNoteRepositoryImpl implements ItemRepository<SecureNote> {
    private final CrudSecureNoteRepository crudSecureNoteRepository;

    @Override
    public Iterable<SecureNote> getAllActive() {
        return crudSecureNoteRepository.findAllActive();
    }

    @Override
    public Iterable<SecureNote> getAllByFolderId(int folderId) {
        return crudSecureNoteRepository.findAllByFolderId(folderId);
    }

    @Override
    public SecureNote save(SecureNote secureNote) {
        return crudSecureNoteRepository.save(secureNote);
    }

    @Override
    public boolean isMovedToTrash(int id) {
        return crudSecureNoteRepository.setDeleted(id) == 1;
    }

    @Override
    public boolean isDeleted(int id) {
        return crudSecureNoteRepository.deleteById(id) != 0;
    }
}
