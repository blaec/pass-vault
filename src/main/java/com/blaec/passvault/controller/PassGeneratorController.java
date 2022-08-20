package com.blaec.passvault.controller;

import com.blaec.passvault.model.passGenerator.PasswordCreator;
import com.blaec.passvault.model.to.PasswordConfigTo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.passay.PasswordGenerator;
import org.springframework.web.bind.annotation.*;

@Slf4j
@AllArgsConstructor
@RequestMapping(PassGeneratorController.URL)
@CrossOrigin(origins = "*")
@RestController
public class PassGeneratorController extends AbstractController{
    static final String URL = API_VERSION + "/pass-generator";

    @PostMapping("/create")
    public String generatePassword(@RequestBody PasswordConfigTo passConfig) {
        return PasswordCreator.from(passConfig);
    }
}
