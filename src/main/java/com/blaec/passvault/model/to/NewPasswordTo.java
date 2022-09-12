package com.blaec.passvault.model.to;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class NewPasswordTo extends BasePasswordTo {

    private NewPasswordTo(int folderId, String title, String user, String password, String website, String note, String creationDate) {
        super(folderId, title, user, password, website, note, creationDate);
    }

    public static NewPasswordTo create(int folderId, String title, String user, String password, String website, String note, String creationDate) {
        return new NewPasswordTo(folderId, title, user, password, website, note, creationDate);
    }
}
