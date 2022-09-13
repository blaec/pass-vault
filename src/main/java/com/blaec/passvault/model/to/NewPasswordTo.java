package com.blaec.passvault.model.to;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class NewPasswordTo extends BasePasswordTo {

    private NewPasswordTo(int folderId, String title, String user, String password, String website, String note) {
        super(folderId, title, user, password, website, note);
    }

    public static NewPasswordTo create(int folderId, String title, String user, String password, String website, String note) {
        return new NewPasswordTo(folderId, title, user, password, website, note);
    }
}
