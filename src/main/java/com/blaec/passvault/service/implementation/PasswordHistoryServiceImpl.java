package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.PasswordHistory;
import com.blaec.passvault.repository.PasswordHistoryRepository;
import com.blaec.passvault.service.PasswordHistoryService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class PasswordHistoryServiceImpl implements PasswordHistoryService {
    private final PasswordHistoryRepository passwordHistoryRepository;

    @Override
    public Iterable<PasswordHistory> getAllByPasswordId(int passwordId) {
        return passwordHistoryRepository.getAllByPasswordId(passwordId);
    }
}
