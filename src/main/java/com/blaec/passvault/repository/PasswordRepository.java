package com.blaec.passvault.repository;

import com.blaec.passvault.model.Password;

import java.util.Optional;

// TODO use default in ItemRepository
public interface PasswordRepository {
    Optional<Password> getById(int id);
}
