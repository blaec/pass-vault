package com.blaec.passvault.model.to.item;

import com.blaec.passvault.model.PasswordHistory;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;

@Slf4j
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PasswordHistoryTo {
    private int passwordId;
    private String password;
    private LocalDate creationDate;
    private LocalDate expirationDate;

    public static PasswordHistoryTo from(PasswordHistory password) {
        PasswordHistoryTo passwordHistoryTo = new PasswordHistoryTo();

        passwordHistoryTo.setPasswordId(password.getId());
        passwordHistoryTo.setPassword(password.getOldPassword());
        passwordHistoryTo.setCreationDate(password.getCreationDate());
        passwordHistoryTo.setExpirationDate(password.getExpirationDate());

        return passwordHistoryTo;
    }
}
