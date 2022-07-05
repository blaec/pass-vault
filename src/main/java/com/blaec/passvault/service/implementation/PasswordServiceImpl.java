package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.PasswordTo;
import com.blaec.passvault.repository.PasswordRepository;
import com.blaec.passvault.service.PasswordService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class PasswordServiceImpl implements PasswordService {
    private final PasswordRepository passwordRepository;

    @Override
    public Iterable<Password> getAll() {
        return passwordRepository.getAll();
    }

    @Override
    public Response.Builder create(PasswordTo passwordTo, Folder folder) {
        Password password = Password.from(passwordTo, Objects.requireNonNull(folder, "folder not supplied"));
        return save(password, folder, "Password for {} successfully saved");
    }

    @Override
    public Response.Builder update(Password password) {
        return save(password, password.getFolder(), "Password for {} successfully updated");
    }

    private Response.Builder save(Password password, Folder folder, String message) {
        Response.Builder response = Response.Builder.create();
        try {
            Password saved = passwordRepository.save(password);
            log.info(message, saved.getTitle());
            response.setSuccess("success");
        } catch (Exception e) {
            response.setFailure("failure");
        }

        return response;
    }

    @Override
    public Response.Builder delete(int id) {
        Response.Builder response = Response.Builder.create();

        if (passwordRepository.isDeleted(id)) {
            String message = String.format("deleted | password with id %d", id);
            log.info(message);
            response.setSuccess(message);
        } else {
            throw new IllegalStateException();
        }

        return response;
    }
}
