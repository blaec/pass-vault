package com.blaec.passvault.model.passGenerator;

import org.passay.*;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class PasswordValidation {
    private static final int MAX_PASSWORD_LENGTH = 60;
    private static final int MIN_MODERATE_PASSWORD_LENGTH = 8;
    private static final int MIN_STRONG_PASSWORD_LENGTH = 11;
    private static final int NUMBER_OF_CHARACTERISTICS_TO_ENFORCE = 3;

    public static void main(String[] args) {
        PasswordValidation.getPasswordStrength("a");
        PasswordValidation.getPasswordStrength("A3BC1#Da");
        PasswordValidation.getPasswordStrength("abcdef");
        PasswordValidation.getPasswordStrength("abcdefghi");
        PasswordValidation.getPasswordStrength("12345679");
        PasswordValidation.getPasswordStrength("qwertyu");
        PasswordValidation.getPasswordStrength("abcdefghijklmnopqrstuvwxyz");
        PasswordValidation.getPasswordStrength("jd28x9&f");
        PasswordValidation.getPasswordStrength("tekwzrxd");
        PasswordValidation.getPasswordStrength("peju765u");
        PasswordValidation.getPasswordStrength("j5n&9!r8");
    }
    public static String getPasswordStrength(String password) {
        List<Rule> rules = List.of(
                new LengthRule(MIN_MODERATE_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH),
                new LengthRule(MIN_STRONG_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH),
                new CharacterCharacteristicsRule(
                        NUMBER_OF_CHARACTERISTICS_TO_ENFORCE,
                        new CharacterRule(EnglishCharacterData.UpperCase),
                        new CharacterRule(EnglishCharacterData.LowerCase),
                        new CharacterRule(EnglishCharacterData.Digit),
                        new CharacterRule(EnglishCharacterData.Special)
                ),
                new IllegalSequenceRule(EnglishSequenceData.Numerical),
                new IllegalSequenceRule(EnglishSequenceData.Alphabetical),
                new IllegalSequenceRule(EnglishSequenceData.USQwerty)
        );
        PasswordValidator validator = new PasswordValidator(rules);
        PasswordData passwordData = new PasswordData(password);

        int ruleWeight =
                (validator.getRules().get(0).validate(passwordData).isValid() ? 5 : 0)
                + (validator.getRules().get(0).validate(passwordData).isValid() ? 25 : 0)
                + (validator.getRules().get(1).validate(passwordData).isValid() ? 19 : 0)
                + (validator.getRules().get(2).validate(passwordData).isValid() ? 17 : 0)
                + (validator.getRules().get(3).validate(passwordData).isValid() ? 17 : 0)
                + (validator.getRules().get(4).validate(passwordData).isValid() ? 17 : 0);

        TreeMap<Integer, String> passwordStrength = new TreeMap<>(
                Map.of(
                        90, "Strong password",
                        70, "Moderate password",
                        0, "Weak password"
                )
        );
        return passwordStrength.lowerEntry(ruleWeight).getValue();
//        System.out.printf("%s | <%d> %s\n", password, ruleWeight, passwordStrength.lowerEntry(ruleWeight).getValue());


//        RuleResult result = validator.validate(passwordData);
//
//        System.out.printf("%s | %d\n", password, result.getDetails().size());
//        if (result.isValid()) {
//            System.out.println("Valid password: '" + password + "'");
//        } else {
//            System.out.println("Invalid password: '" + password + "'");
//            for (String msg : validator.getMessages(result)) {
//                System.out.println(msg);
//            }
//        }
    }
}


