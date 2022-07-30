package com.blaec.passvault.repository;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.Password;

public interface PasswordRepository {
    Iterable<Password> getAll();
    Iterable<Password> getAllByFolderId(int folderId);
    Password save(Password password);
    boolean isDeleted(int id);
}
