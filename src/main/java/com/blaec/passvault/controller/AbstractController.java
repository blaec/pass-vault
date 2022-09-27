package com.blaec.passvault.controller;

import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.SecureNote;
import com.blaec.passvault.model.to.item.BaseItemTo;
import com.blaec.passvault.model.to.item.PasswordTo;
import com.blaec.passvault.model.to.item.SecureNoteTo;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public abstract class AbstractController {
    protected static final String API_VERSION = "/api/v1";

    protected List<BaseItemTo> mappedPasswords(Iterable<Password> passwords) {
        return StreamSupport.stream(passwords.spliterator(), false)
                .map(PasswordTo::from)
                .collect(Collectors.toList());
    }

    protected List<BaseItemTo> mappedSecureNotes(Iterable<SecureNote> secureNotes) {
        return StreamSupport.stream(secureNotes.spliterator(), false)
                .map(SecureNoteTo::from)
                .collect(Collectors.toList());
    }
}
