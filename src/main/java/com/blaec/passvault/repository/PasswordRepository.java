package com.blaec.passvault.repository;

import com.blaec.passvault.model.Password;

import java.util.Optional;

public interface PasswordRepository {
    Optional<Password> getById(int id);
}
