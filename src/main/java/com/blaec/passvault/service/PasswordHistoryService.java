package com.blaec.passvault.service;

import com.blaec.passvault.model.PasswordHistory;

public interface PasswordHistoryService {
    Iterable<PasswordHistory> getAllByPasswordId(int passwordId);
}
