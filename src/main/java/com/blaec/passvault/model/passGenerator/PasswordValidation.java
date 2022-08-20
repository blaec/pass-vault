package com.blaec.passvault.model.passGenerator;

import org.passay.*;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.function.Function;
import java.util.stream.Collectors;

public class PasswordValidation {
    protected static final int MAX_PASSWORD_LENGTH = 60;
    protected static final int MIN_MODERATE_PASSWORD_LENGTH = 8;
    protected static final int MIN_STRONG_PASSWORD_LENGTH = 11;
    protected static final int NUMBER_OF_CHARACTERISTICS_TO_ENFORCE = 3;
    private static final TreeMap<Integer, String> passwordStrength = new TreeMap<>(
            Map.of(
                    90, "Strong password",
                    70, "Moderate password",
                    0, "Weak password"
            )
    );

    public static String getPasswordStrength(String password) {
        List<Rule> rules = ValidationRule.stream()
                .map(ValidationRule::create)
                .collect(Collectors.toList());
        PasswordValidator validator = new PasswordValidator(rules);
        PasswordData passwordData = new PasswordData(password);
        Integer passwordWeight = ValidationRule.stream()
                .map(getRuleWeight(validator, passwordData))
                .reduce(0, Integer::sum);

//        printRulesValidation(password, passwordWeight, validator, passwordData);
        return passwordStrength.lowerEntry(passwordWeight).getValue();
    }

    private static Function<ValidationRule, Integer> getRuleWeight(PasswordValidator validator, PasswordData passwordData) {
        return rule -> {
            boolean isRuleValid = validator.getRules().get(rule.ordinal()).validate(passwordData).isValid();
            return isRuleValid
                    ? rule.getWeight()
                    : 0;
        };
    }

    private static void printRulesValidation(String password, Integer passwordWeight, PasswordValidator validator, PasswordData passwordData) {

        RuleResult result = validator.validate(passwordData);

        System.out.printf("%s | weight: %d | failed rules count: %d | %s\n", password, passwordWeight, result.getDetails().size(), passwordStrength.lowerEntry(passwordWeight).getValue());
        if (result.isValid()) {
            System.out.println(" Valid password: '" + password + "'");
        } else {
            for (String msg : validator.getMessages(result)) {
                System.out.println(" " + msg);
            }
        }
        System.out.println();
    }
}


