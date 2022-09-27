package com.blaec.passvault.model.to.item;

import com.blaec.passvault.model.Password;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PasswordTo extends BaseItemTo {
    private String user;
    private String password;
    private String website;

    public static BaseItemTo from(Password password) {
        PasswordTo passwordTo = new PasswordTo();

        passwordTo.setId(password.getId());
        passwordTo.setFolderId(password.getFolderId());
        passwordTo.setFolderName(password.getFolderName());
        passwordTo.setTitle(password.getTitle());
        passwordTo.setNote(password.getNote());
        passwordTo.setCreationDate(String.valueOf(password.getCreationDate()));
        passwordTo.setUser(password.getUser());
        passwordTo.setPassword(password.getPassword());
        passwordTo.setWebsite(password.getWebsite());

        return passwordTo;
    }
}
