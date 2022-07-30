package com.blaec.passvault.model.passGenerator;

import com.google.common.collect.ImmutableMap;

import java.util.Map;
import java.util.Optional;

public enum SpecialChars {
    full_set,
    short_set;

    private static final Map<SpecialChars, String> sets = ImmutableMap.of(
            SpecialChars.full_set, "!@#$%^&*()_+",
            SpecialChars.short_set, "!@#$%^&*()_+"
    );

    protected static String getSpecialChars(SpecialChars set) {
        SpecialChars specialChars = Optional.ofNullable(set).orElse(SpecialChars.short_set);
        return sets.get(specialChars);
    }
}
