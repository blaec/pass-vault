package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.PasswordHistory;
import com.blaec.passvault.repository.PasswordHistoryRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;

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
    public Iterable<PasswordHistory> getAllByPasswordId(int passwordId) {
        return crudPasswordHistoryRepository.findAllByPasswordId(passwordId);
    }

    @Override
    public boolean hasNoHistory(List<Integer> ids) {
        return crudPasswordHistoryRepository.findAllByIds(ids).isEmpty();
    }

    @Override
    public boolean isDeleted(int id) {
        return crudPasswordHistoryRepository.deleteByPasswordId(id) != 0;
    }

    @Override
    public boolean isDeletedByIds(List<Integer> ids) {
        return crudPasswordHistoryRepository.deleteByPasswordIds(ids) != 0;
    }
}
