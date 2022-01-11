package com.blaec.passvault.model;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;

@Slf4j
@Entity
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "folders")
public class Folder {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id
    private Integer id;

    @NonNull private String name;

    public static Folder from(String name) {
        Folder created = new Folder();
        created.name = name;

        return created;
    }
}
