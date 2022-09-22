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
public class PasswordItemTo extends ItemTo {
    private String user;
    private String password;
    private String website;

    public static ItemTo from(Password password) {
        PasswordItemTo passwordItemTo = new PasswordItemTo();

        passwordItemTo.setId(password.getId());
        passwordItemTo.setFolderId(password.getFolderId());
        passwordItemTo.setFolderName(password.getFolderName());
        passwordItemTo.setTitle(password.getTitle());
        passwordItemTo.setNote(password.getNote());
        passwordItemTo.setCreationDate(String.valueOf(password.getCreationDate()));
        passwordItemTo.setUser(password.getUser());
        passwordItemTo.setPassword(password.getPassword());
        passwordItemTo.setWebsite(password.getWebsite());

        return passwordItemTo;
    }
}
