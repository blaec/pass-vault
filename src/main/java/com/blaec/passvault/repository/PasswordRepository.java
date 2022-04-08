package com.blaec.passvault.repository;

import com.blaec.passvault.model.Password;

public interface PasswordRepository {
    Iterable<Password> getAll();
    Password save(Password password);
    boolean isDeleted(int id);
}
