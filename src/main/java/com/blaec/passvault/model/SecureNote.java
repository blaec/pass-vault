package com.blaec.passvault.model;

import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.utils.DateTimeUtils;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;

@Slf4j
@Entity
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "secure_notes")
public class SecureNote extends BaseItem {

    public static SecureNote from(FullItemTo secureNoteTo, Folder folder) {
        SecureNote created = new SecureNote();

        created.id = secureNoteTo.getId();
        created.folder = folder;
        created.title = secureNoteTo.getTitle();
        created.note = secureNoteTo.getNote();
        created.creationDate = LocalDate.parse(secureNoteTo.getCreationDate(), DateTimeUtils.formatter);

        return created;
    }
}
