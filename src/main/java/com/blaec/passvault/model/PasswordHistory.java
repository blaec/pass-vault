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

    @Column(name="creation_date")
    @NonNull private LocalDate creationDate;

    @Column(name="expiration_date")
    @NonNull private LocalDate expirationDate;

    public static PasswordHistory from(Password newPassword, Password oldPassword) {
        PasswordHistory created = new PasswordHistory();

        created.password = newPassword;
        created.creationDate = oldPassword.getCreationDate();
        created.expirationDate = newPassword.getCreationDate();

        return created;
    }
}
