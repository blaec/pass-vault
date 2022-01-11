package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.Password;
import com.blaec.passvault.repository.PasswordRepository;
import com.blaec.passvault.service.PasswordService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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
    public String save(Password password) {
        String response = "success";
        try {
            Password save = passwordRepository.save(password);
            log.info("Password for {} successfully saved", password.getTitle());
        } catch (Exception e) {
            response = "failure";
        }
        return response;
    }
}
