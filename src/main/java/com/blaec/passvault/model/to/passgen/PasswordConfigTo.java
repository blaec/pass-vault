package com.blaec.passvault.model.to.passgen;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class PasswordConfigTo {
    private final int length;
    private final boolean isUseUpperCase;
    private final boolean isUseSpecialChars;
    private final boolean isUseDigits;
}
