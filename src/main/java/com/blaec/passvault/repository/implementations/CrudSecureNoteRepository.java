package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.SecureNote;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CrudSecureNoteRepository extends CrudRepository<SecureNote, Integer> {

    @Query("SELECT s FROM SecureNote s WHERE s.deleted=false")
    Iterable<SecureNote> findAllActive();

    @Query("SELECT s FROM SecureNote s WHERE s.deleted=true")
    Iterable<SecureNote> findAllDeleted();

    @Query("SELECT s FROM SecureNote s WHERE s.folder.id=:folderId and s.deleted=false")
    Iterable<SecureNote> findAllByFolderId(int folderId);

    @Transactional
    @Modifying
    @Query("DELETE FROM SecureNote s WHERE s.id=:id")
    int deleteById(int id);

    @Transactional
    @Modifying
    @Query("DELETE FROM SecureNote s WHERE s.deleted=true")
    int deleteFromTrash();

    @Transactional
    @Modifying
    @Query("UPDATE SecureNote s SET s.deleted=true WHERE s.id=:id")
    int moveToTrash(int id);

    @Transactional
    @Modifying
    @Query("UPDATE SecureNote s SET s.deleted=false WHERE s.id=:id")
    int restoreFromTrash(int id);
}