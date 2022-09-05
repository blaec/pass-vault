package com.blaec.passvault.model.passGenerator;

import org.passay.*;

import java.util.stream.Stream;

import static org.passay.RepeatCharacterRegexRule.MINIMUM_SEQUENCE_LENGTH;

public enum ValidationRule {
    moderateLengthRule{
        @Override
        Rule create() {
            return new LengthRule(PasswordValidation.MIN_MODERATE_PASSWORD_LENGTH, PasswordValidation.MAX_PASSWORD_LENGTH);
        }

        @Override int getWeight() {return 5;}
    },
    strongLengthRule {
        @Override
        Rule create() {
            return new LengthRule(PasswordValidation.MIN_STRONG_PASSWORD_LENGTH, PasswordValidation.MAX_PASSWORD_LENGTH);
        }

        @Override int getWeight() {return 25;}
    },
    characterCharacteristicsRule {
        @Override
        Rule create() {
            return new CharacterCharacteristicsRule(
                    PasswordValidation.NUMBER_OF_CHARACTERISTICS_TO_ENFORCE,
                    new CharacterRule(EnglishCharacterData.UpperCase),
                    new CharacterRule(EnglishCharacterData.LowerCase),
                    new CharacterRule(EnglishCharacterData.Digit),
                    new CharacterRule(EnglishCharacterData.Special)
            );
        }

        @Override int getWeight() {return 19;}
    },
    illegalNumericalSequenceRule {
        @Override
        Rule create() {
            return new IllegalSequenceRule(EnglishSequenceData.Numerical);
        }

        @Override int getWeight() {return 13;}
    },
    illegalAlphabeticalSequenceRule {
        @Override
        Rule create() {
            return new IllegalSequenceRule(EnglishSequenceData.Alphabetical);
        }

        @Override int getWeight() {return 13;}
    },
    illegalUSQwertySequenceRule {
        @Override
        Rule create() {
            return new IllegalSequenceRule(EnglishSequenceData.USQwerty);
        }

        @Override int getWeight() {return 13;}
    },
    repeatCharacterRegexRule {
        @Override
        Rule create() {
                return new RepeatCharacterRegexRule(MINIMUM_SEQUENCE_LENGTH);
        }

        @Override int getWeight() {return 12;}
    };

    public static Stream<ValidationRule> stream() {
        return Stream.of(ValidationRule.values());
    }

    abstract Rule create();
    abstract int getWeight();
}
