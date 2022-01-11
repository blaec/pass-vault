package com.blaec.passvault.model;

import com.blaec.passvault.model.to.PasswordTo;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;

@Slf4j
@Entity
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "passwords")
public class Password {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "folder_id", nullable = false)
    private Folder folder;

    @NonNull private String title;
    @NonNull private String user;
    @NonNull private String password;
    @NonNull private String website;
    private String note;

    @Column(name="creation_date")
    @NonNull private String creationDate;

    public static Password from(PasswordTo passwordTo, Folder folder) {
        Password created = new Password();
        created.folder = folder;
        created.title = passwordTo.getTitle();
        created.user = passwordTo.getUser();
        created.password = passwordTo.getPassword();
        created.website = passwordTo.getWebsite();
        created.note = passwordTo.getNote();

        return created;
    }
}
