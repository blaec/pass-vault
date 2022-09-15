package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.SecretNote;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CrudSecretNoteRepository  extends CrudRepository<SecretNote, Integer> {

    @Transactional
    @Modifying
    @Query("DELETE FROM SecretNote s WHERE s.id=:id")
    int deleteById(int id);

    @Query("SELECT s FROM SecretNote s WHERE s.folder.id=:folderId")
    Iterable<SecretNote> findAllByFolderId(int folderId);
}