package com.blaec.passvault.service;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.password.PasswordTo;
import org.springframework.transaction.annotation.Transactional;

public interface PasswordService {
    Iterable<Password> getAll();
    Iterable<Password> getAllByFolderId(int folderId);
    @Transactional Response.Builder create(PasswordTo password, Folder folder);
    @Transactional Response.Builder update(PasswordTo password, Folder folder);
    @Transactional Response.Builder delete(int id);
}
