package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.SecretNote;
import com.blaec.passvault.repository.ItemRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@AllArgsConstructor
@Repository
public class SecretNoteRepositoryImpl implements ItemRepository<SecretNote> {
    private final CrudSecretNoteRepository crudSecretNoteRepository;

    @Override
    public Iterable<SecretNote> getAll() {
        return crudSecretNoteRepository.findAll();
    }

    @Override
    public Iterable<SecretNote> getAllByFolderId(int folderId) {
        return crudSecretNoteRepository.findAllByFolderId(folderId);
    }

    @Override
    public SecretNote save(SecretNote secretNote) {
        return crudSecretNoteRepository.save(secretNote);
    }

    @Override
    public boolean isDeleted(int id) {
        return crudSecretNoteRepository.deleteById(id) != 0;
    }
}
