package com.blaec.passvault.model;

import com.blaec.passvault.model.to.ExistingPasswordTo;
import com.blaec.passvault.model.to.NewPasswordTo;
import com.blaec.passvault.utils.DateTimeUtils;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.time.LocalDate;

@Slf4j
@Entity
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "passwords")
public class Password extends BaseItem {
    @NonNull private String user;
    @NonNull private String password;
    @NonNull private String website;
    private String note;

    public static Password from(NewPasswordTo passwordTo, Folder folder) {
        Password created = new Password();
        created.folder = folder;
        created.title = passwordTo.getTitle();
        created.user = passwordTo.getUser();
        created.password = passwordTo.getPassword();
        created.website = passwordTo.getWebsite();
        created.note = passwordTo.getNote();
        created.creationDate = LocalDate.parse(passwordTo.getCreationDate(), DateTimeUtils.formatter);

        return created;
    }

    public static Password from(ExistingPasswordTo passwordTo, Folder folder) {
        Password created = new Password();
        created.id = passwordTo.getPasswordId();
        created.folder = folder;
        created.title = passwordTo.getTitle();
        created.user = passwordTo.getUser();
        created.password = passwordTo.getPassword();
        created.website = passwordTo.getWebsite();
        created.note = passwordTo.getNote();
        created.creationDate = LocalDate.parse(passwordTo.getCreationDate(), DateTimeUtils.formatter);

        return created;
    }
}
