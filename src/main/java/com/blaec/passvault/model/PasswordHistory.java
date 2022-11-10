package com.blaec.passvault.model;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.time.LocalDate;

@Slf4j
@Entity
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "passwords_history")
public class PasswordHistory {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "password_id", nullable = false)
    private Password password;

    @Column(name="old_password")
    @NonNull private String oldPassword;

    @Column(name="creation_date")
    @NonNull private LocalDate creationDate;

    @Column(name="expiration_date")
    @NonNull private LocalDate expirationDate;

    public static PasswordHistory from(Password password) {
        PasswordHistory created = new PasswordHistory();

        created.password = password;
        created.oldPassword = password.getPreviousState().getPassword();
        created.creationDate = password.getPreviousState().getCreationDate();
        created.expirationDate = password.getCreationDate();

        return created;
    }
}
