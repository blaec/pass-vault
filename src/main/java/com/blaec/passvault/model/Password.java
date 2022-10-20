package com.blaec.passvault.model;

import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.utils.DateTimeUtils;
import com.blaec.passvault.utils.IdUtils;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;

@Slf4j
@Entity
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "passwords")
public class Password extends BaseItem implements Cloneable {
    @NonNull private String user;
    @NonNull private String password;
    @NonNull private String website;
    private int age;

    public static Password from(FullItemTo passwordTo, Folder folder) {
        Password created = new Password();

        created.id = IdUtils.toModel(passwordTo.getId());
        created.folder = folder;
        created.title = passwordTo.getTitle();
        created.user = passwordTo.getUser();
        created.password = passwordTo.getPassword();
        created.website = passwordTo.getWebsite();
        created.note = passwordTo.getNote();
        created.creationDate = LocalDate.parse(passwordTo.getCreationDate(), DateTimeUtils.formatter);
        created.age = passwordTo.getAge();

        return created;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
