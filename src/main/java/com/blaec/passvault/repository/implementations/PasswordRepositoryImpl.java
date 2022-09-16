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
    public Iterable<Password> getAll() {
        return crudPasswordRepository.findAll();
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
    public boolean isDeleted(int id) {
        return crudPasswordRepository.deleteById(id) != 0;
    }
}
