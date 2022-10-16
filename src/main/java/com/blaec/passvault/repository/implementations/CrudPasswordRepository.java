package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.Password;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CrudPasswordRepository extends CrudRepository<Password, Integer> {

    @Query("SELECT p FROM Password p WHERE p.deleted=false")
    Iterable<Password> findAllActive();

    @Query("SELECT p FROM Password p WHERE p.deleted=true")
    Iterable<Password> findAllDeleted();

    @Query("SELECT p FROM Password p WHERE p.folder.id=:folderId and p.deleted=false")
    Iterable<Password> findAllByFolderId(int folderId);

    @Transactional
    @Modifying
    @Query("DELETE FROM Password p WHERE p.id=:id")
    int deleteById(int id);

    @Transactional
    @Modifying
    @Query("UPDATE Password p SET p.deleted=true WHERE p.id=:id")
    int moveToTrash(int id);

    @Transactional
    @Modifying
    @Query("UPDATE Password p SET p.deleted=false WHERE p.id=:id")
    int restore(int id);
}
