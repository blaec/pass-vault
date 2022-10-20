package com.blaec.passvault.model.to.passwordHistory;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter(AccessLevel.PROTECTED)
public class PasswordHistoryTo {
    private String id;
    private int passwordId;
    private String creationDate;
    private String expirationDate;
}
