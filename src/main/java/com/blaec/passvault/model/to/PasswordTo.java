package com.blaec.passvault.model.to;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PasswordTo {
    private final int folderId;
    private final String title;
    private final String user;
    private final String password;
    private final String website;
    private final String note;

    public static PasswordTo create(int folderId, String title, String user, String password, String website, String note) {
        return new PasswordTo(folderId, title, user, password, website, note);
    }
}
