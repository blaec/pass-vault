package com.blaec.passvault.service;

import com.blaec.passvault.model.PasswordHistory;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.passwordHistory.PasswordHistoryTo;
import org.springframework.transaction.annotation.Transactional;

public interface PasswordHistoryService {
    Iterable<PasswordHistory> getAllByPasswordId(int passwordId);
    @Transactional Response.Builder create(PasswordHistoryTo to);
}
