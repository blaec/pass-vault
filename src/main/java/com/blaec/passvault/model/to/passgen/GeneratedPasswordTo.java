package com.blaec.passvault.model.to.passgen;

import com.blaec.passvault.enums.PasswordStrength;
import com.blaec.passvault.model.passGenerator.PasswordCreator;
import com.blaec.passvault.model.passGenerator.PasswordValidation;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class GeneratedPasswordTo {
    private final String password;
    private final int strength;

    public static GeneratedPasswordTo create(PasswordConfigTo passConfig) {
        String password = PasswordCreator.from(passConfig);
        PasswordStrength strength = PasswordValidation.getPasswordStrength(password);

        return new GeneratedPasswordTo(password, strength.ordinal());
    }
}
