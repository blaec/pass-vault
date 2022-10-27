package com.blaec.passvault.controller;

import com.blaec.passvault.model.passGenerator.PasswordValidation;
import com.blaec.passvault.model.to.passgen.GeneratedPasswordTo;
import com.blaec.passvault.model.to.passgen.PasswordConfigTo;
import com.sun.istack.NotNull;
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
    public record PasswordStringTo(@NotNull String password) {}

    @PostMapping(value = "/get-strength")
    public int getPasswordStrength(@RequestBody PasswordStringTo to) {
        return PasswordValidation.getPasswordStrength(to.password).ordinal();
    }

    @PostMapping("/create")
    public GeneratedPasswordTo generatePassword(@RequestBody PasswordConfigTo passConfig) {
        return GeneratedPasswordTo.create(passConfig);
    }
}
