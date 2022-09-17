package com.blaec.passvault.controller;

import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.SecretNote;
import com.blaec.passvault.model.to.item.ItemTo;
import com.blaec.passvault.model.to.item.PasswordItemTo;
import com.blaec.passvault.model.to.item.SecretNoteItemTo;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public abstract class AbstractController {
    protected static final String API_VERSION = "/api/v1";

    protected List<ItemTo> mappedPasswords(Iterable<Password> passwords) {
        return StreamSupport.stream(passwords.spliterator(), false)
                .map(PasswordItemTo::from)
                .collect(Collectors.toList());
    }

    protected List<ItemTo> mappedSecretNotes(Iterable<SecretNote> secretNotes) {
        return StreamSupport.stream(secretNotes.spliterator(), false)
                .map(SecretNoteItemTo::from)
                .collect(Collectors.toList());
    }
}
