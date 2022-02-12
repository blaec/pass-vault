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
    public Response save(PasswordTo passwordTo, Optional<Folder> folder) {
        Response.Builder response = Response.Builder.create();
        try {
            Password password = Password.from(passwordTo, folder.orElseThrow());
            Password save = passwordRepository.save(password);
            log.info("Password for {} successfully saved", save.getTitle());
            response.setSuccess("success");
        } catch (Exception e) {
            response.setFailure("failure");
        }
        return response.build();
    }
}
