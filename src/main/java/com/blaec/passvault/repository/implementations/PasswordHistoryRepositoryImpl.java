package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.PasswordHistory;
import com.blaec.passvault.repository.PasswordHistoryRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@AllArgsConstructor
@Repository
public class PasswordHistoryRepositoryImpl implements PasswordHistoryRepository {
    private final CrudPasswordHistoryRepository crudPasswordHistoryRepository;

    @Override
    public PasswordHistory save(PasswordHistory passwordHistory) {
        return crudPasswordHistoryRepository.save(passwordHistory);
    }

    @Override
    public boolean isDeleted(int id) {
        return crudPasswordHistoryRepository.deleteByPasswordId(id) != 0;
    }
}
