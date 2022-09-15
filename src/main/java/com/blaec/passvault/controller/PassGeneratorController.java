package com.blaec.passvault.controller;

import com.blaec.passvault.model.passGenerator.PasswordValidation;
import com.blaec.passvault.model.to.passgen.GeneratedPasswordTo;
import com.blaec.passvault.model.to.passgen.PasswordConfigTo;
import com.blaec.passvault.model.to.passgen.PasswordStringTo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@AllArgsConstructor
@RequestMapping(PassGeneratorController.URL)
@CrossOrigin(origins = "*")
@RestController
public class PassGeneratorController extends AbstractController{
    static final String URL = API_VERSION + "/pass-generator";

    @PostMapping(value = "/get-strength")
    public int getPasswordStrength(@RequestBody PasswordStringTo password) {
        return PasswordValidation.getPasswordStrength(password.getPassword()).ordinal();
    }

    @PostMapping("/create")
    public GeneratedPasswordTo generatePassword(@RequestBody PasswordConfigTo passConfig) {
        return GeneratedPasswordTo.create(passConfig);
    }
}
