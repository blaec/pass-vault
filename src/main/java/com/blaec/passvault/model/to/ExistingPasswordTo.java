package com.blaec.passvault.model.to;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class ExistingPasswordTo extends BasePasswordTo {
    private final int passwordId;

    private ExistingPasswordTo(int passwordId, int folderId, String title, String user, String password, String website, String note, String creationDate) {
        super(folderId, title, user, password, website, note, creationDate);
        this.passwordId = passwordId;
    }

    public static ExistingPasswordTo create(int passwordId, int folderId, String title, String user, String password, String website, String note, String creationDate) {
        return new ExistingPasswordTo(passwordId, folderId, title, user, password, website, note, creationDate);
    }
}
