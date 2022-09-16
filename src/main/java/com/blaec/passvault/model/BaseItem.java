package com.blaec.passvault.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@MappedSuperclass
public abstract class BaseItem {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id protected Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "folder_id", nullable = false)
    protected Folder folder;

    @NonNull protected String title;

    @Column(name="creation_date")
    @NonNull protected LocalDate creationDate;

    protected String note;
}
