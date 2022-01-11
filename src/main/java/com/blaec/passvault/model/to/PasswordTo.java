package com.blaec.passvault.model.to;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PasswordTo {
    private final String folder;
    private final String title;
    private final String user;
    private final String password;
    private final String website;
    private final String note;
}
