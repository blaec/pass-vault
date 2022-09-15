package com.blaec.passvault.repository;

import com.blaec.passvault.model.SecretNote;

public interface SecretNoteRepository {
    Iterable<SecretNote> getAll();
    Iterable<SecretNote> getAllByFolderId(int folderId);
    SecretNote save(SecretNote secretNote);
    boolean isDeleted(int id);
}
