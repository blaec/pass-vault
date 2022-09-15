package com.blaec.passvault.model;

import com.blaec.passvault.model.to.password.PasswordTo;
import com.blaec.passvault.model.to.secretNote.SecretNoteTo;
import com.blaec.passvault.utils.DateTimeUtils;
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
@Table(name = "secret_notes")
public class SecretNote extends BaseItem {
    @NonNull private String note;

    public static SecretNote from(SecretNoteTo secretNoteTo, Folder folder) {
        SecretNote created = new SecretNote();

        created.id = secretNoteTo.getSecretNodeId();
        created.folder = folder;
        created.title = secretNoteTo.getTitle();
        created.note = secretNoteTo.getNote();
        created.creationDate = LocalDate.parse(secretNoteTo.getCreationDate(), DateTimeUtils.formatter);

        return created;
    }
}
