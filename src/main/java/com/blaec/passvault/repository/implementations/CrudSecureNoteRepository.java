package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.SecureNote;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CrudSecureNoteRepository extends CrudRepository<SecureNote, Integer> {

    @Transactional
    @Modifying
    @Query("DELETE FROM SecureNote s WHERE s.id=:id")
    int deleteById(int id);

    @Query("SELECT s FROM SecureNote s WHERE s.folder.id=:folderId")
    Iterable<SecureNote> findAllByFolderId(int folderId);
}