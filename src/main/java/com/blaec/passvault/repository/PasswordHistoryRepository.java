package com.blaec.passvault.repository;

import com.blaec.passvault.model.PasswordHistory;

public interface PasswordHistoryRepository {
    Iterable<PasswordHistory> getAllByPasswordId(int passwordId);
    PasswordHistory save(PasswordHistory passwordHistory);
    boolean isDeleted(int id);
}
