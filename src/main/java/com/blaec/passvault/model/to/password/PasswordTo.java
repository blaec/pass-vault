package com.blaec.passvault.model.to.password;

import com.blaec.passvault.model.to.BaseItemTo;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PasswordTo implements BaseItemTo {
    private final Integer passwordId;
    private final int folderId;
    private final String title;
    private final String user;
    private final String password;
    private final String website;
    private final String note;
    private final String creationDate;

    public static PasswordTo create(Integer passwordId, int folderId, String title, String user, String password, String website, String note, String creationDate) {
        return new PasswordTo(passwordId, folderId, title, user, password, website, note, creationDate);
    }
}
