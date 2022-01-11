package com.blaec.passvault.service;

import com.blaec.passvault.model.Password;
import org.springframework.transaction.annotation.Transactional;

public interface PasswordService {
    Iterable<Password> getAll();
    @Transactional String save(Password password);
}
