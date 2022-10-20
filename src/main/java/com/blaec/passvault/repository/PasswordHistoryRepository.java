package com.blaec.passvault.repository;

import com.blaec.passvault.model.PasswordHistory;

public interface PasswordHistoryRepository {
    PasswordHistory save(PasswordHistory passwordHistory);
    boolean isDeleted(int id);
}
