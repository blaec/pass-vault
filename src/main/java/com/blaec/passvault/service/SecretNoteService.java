package com.blaec.passvault.service;

import com.blaec.passvault.model.SecretNote;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.secretNote.SecretNoteTo;
import org.springframework.transaction.annotation.Transactional;

public interface SecretNoteService {
    Iterable<SecretNote> getAll();
    Iterable<SecretNote> getAllByFolderId(int folderId);
    @Transactional
    Response.Builder create(SecretNoteTo secretNoteTo);
    @Transactional Response.Builder update(SecretNoteTo secretNoteTo);
    @Transactional Response.Builder delete(int id);
}
