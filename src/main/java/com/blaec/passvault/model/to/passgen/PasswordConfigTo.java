package com.blaec.passvault.model.to.passgen;

public record PasswordConfigTo
        (
                int length,
                boolean isUseUpperCase,
                boolean isUseSpecialChars,
                boolean isUseDigits
        ) {
}
