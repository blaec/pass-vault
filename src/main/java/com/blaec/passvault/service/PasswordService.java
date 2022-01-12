package com.blaec.passvault.service;

import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.response.Response;
import org.springframework.transaction.annotation.Transactional;

public interface PasswordService {
    Iterable<Password> getAll();
    @Transactional Response save(Password password);
}
