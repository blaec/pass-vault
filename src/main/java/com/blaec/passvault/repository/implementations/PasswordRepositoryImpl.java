package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.Password;
import com.blaec.passvault.repository.ItemRepository;
import com.blaec.passvault.repository.PasswordRepository;
import com.google.common.collect.Iterables;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Repository
public class PasswordRepositoryImpl implements ItemRepository<Password>, PasswordRepository {
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
    public Optional<Password> getById(int id) {
        return crudPasswordRepository.findById(id);
    }

    @Override
    public Password save(Password password) {
        return crudPasswordRepository.save(password);
    }

    @Override
    public boolean hasItemsInTrash() {
        return Iterables.size(crudPasswordRepository.findAllDeleted()) > 0;
    }

    @Override
    public boolean isMovedToTrash(int id) {
        return crudPasswordRepository.moveToTrash(id) == 1;
    }

    @Override
    public boolean isRestoredFromTrash(int id) {
        return crudPasswordRepository.restoreFromTrash(id) == 1;
    }

    @Override
    public boolean isDeleted(int id) {
        return crudPasswordRepository.deleteById(id) != 0;
    }

    @Override
    public int emptyTrash() {
        return crudPasswordRepository.deleteFromTrash();
    }
}
