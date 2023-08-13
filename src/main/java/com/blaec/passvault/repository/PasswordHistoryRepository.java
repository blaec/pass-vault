package com.blaec.passvault.repository;

import com.blaec.passvault.model.PasswordHistory;

import java.util.List;

public interface PasswordHistoryRepository {
    PasswordHistory save(PasswordHistory passwordHistory);
    Iterable<PasswordHistory> getAllByPasswordId(int passwordId);
    boolean hasNoHistory(List<Integer> ids);
    boolean isDeleted(int id);
    boolean isDeletedByIds(List<Integer> ids);
}
