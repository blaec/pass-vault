package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.Password;
import com.blaec.passvault.repository.ItemRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@AllArgsConstructor
@Repository
public class PasswordRepositoryImpl implements ItemRepository<Password> {
    private final CrudPasswordRepository crudPasswordRepository;

    @Override
    public Iterable<Password> getAllActive() {
        return crudPasswordRepository.findAllActive();
    }

    @Override
    public Iterable<Password> getAllDeleted() {
        return crudPasswordRepository.findAllDeleted();
    }

    @Override
    public Iterable<Password> getAllByFolderId(int folderId) {
        return crudPasswordRepository.findAllByFolderId(folderId);
    }

    @Override
    public Password save(Password password) {
        return crudPasswordRepository.save(password);
    }

    @Override
    public boolean isMovedToTrash(int id) {
        return crudPasswordRepository.moveToTrash(id) == 1;
    }

    @Override
    public boolean isRestored(int id) {
        return crudPasswordRepository.restore(id) == 1;
    }

    @Override
    public boolean isDeleted(int id) {
        return crudPasswordRepository.deleteById(id) != 0;
    }
}
