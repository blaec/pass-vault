package com.blaec.passvault.service;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.NewPasswordTo;
import org.springframework.transaction.annotation.Transactional;

public interface PasswordService {
    Iterable<Password> getAll();
    @Transactional Response.Builder create(NewPasswordTo password, Folder folder);
    @Transactional Response.Builder update(Password password);
    @Transactional Response.Builder delete(int id);
}
