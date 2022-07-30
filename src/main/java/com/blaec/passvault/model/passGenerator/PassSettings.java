package com.blaec.passvault.model.passGenerator;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.passay.CharacterData;
import org.passay.CharacterRule;
import org.passay.EnglishCharacterData;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Getter
public class PassSettings {
    private final int length;
    private final List<CharacterRule> rules;

    public PassSettings(Builder builder) {
        this.length = builder.length;
        this.rules = builder.rules;
    }

    private static class Builder {
        private final int length;
        private final List<CharacterRule> rules = new ArrayList<>();

        private Builder(int length) {
            rules.add(new CharacterRule(EnglishCharacterData.LowerCase));
            this.length = length;
        }

        public static Builder create(int length) {
            return new Builder(length);
        }

        public Builder addUpperCaseLimit() {
            rules.add(new CharacterRule(EnglishCharacterData.UpperCase));
            return this;
        }

        public Builder addDigitCharLimit() {
            rules.add(new CharacterRule(EnglishCharacterData.Digit));
            return this;
        }

        public Builder addSpecialCharLimit(SpecialChars set) {
            CharacterData specialChars = new CharacterData() {
                public String getErrorCode() {
                    return "ERROR_CODE";
                }

                public String getCharacters() {
                    return SpecialChars.getSpecialChars(set);
                }
            };
            rules.add(new CharacterRule(specialChars));
            return this;
        }

        public PassSettings build() {
            return new PassSettings(this);
        }
    }
}
