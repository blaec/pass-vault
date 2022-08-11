package com.blaec.passvault.model.passGenerator;

import com.blaec.passvault.model.to.PasswordConfigTo;
import lombok.Getter;
import org.passay.CharacterData;
import org.passay.CharacterRule;
import org.passay.EnglishCharacterData;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

@Getter
public class PassSettings {
    private final int length;
    private final List<CharacterRule> rules = new ArrayList<>();

    private PassSettings(int length, boolean isUpperCase, boolean isDigits, boolean isSpecialChars) {
        this.length = length;
        rules.add(new CharacterRule(EnglishCharacterData.LowerCase));
        useUpperCase.accept(isUpperCase);
        useDigits.accept(isDigits);
        useSpecialCharacters.accept(isSpecialChars);
    }

    public static PassSettings create(PasswordConfigTo config) {
        return new PassSettings(config.getLength(), config.isUseUpperCase(), config.isUseDigits(), config.isUseSpecialChars());
    }

    private final Consumer<Boolean> useUpperCase = (isApply) -> {
        if (isApply) {
            rules.add(new CharacterRule(EnglishCharacterData.UpperCase));
        }
    };

    private final Consumer<Boolean> useDigits = (isApply) -> {
        if (isApply) {
            rules.add(new CharacterRule(EnglishCharacterData.Digit));
        }
    };

    private final Consumer<Boolean> useSpecialCharacters = (isApply) -> {
        if (isApply) {
            CharacterData specialChars = new CharacterData() {
                public String getErrorCode() {
                    return "ERROR_CODE";
                }

                public String getCharacters() {
                    return "!@#$%&*";
                }
            };
            rules.add(new CharacterRule(specialChars));
        }
    };
}
