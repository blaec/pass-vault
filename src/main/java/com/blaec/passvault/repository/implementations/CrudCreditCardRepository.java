package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.CreditCard;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CrudCreditCardRepository extends CrudRepository<CreditCard, Integer> {

    @Query("SELECT c FROM CreditCard c WHERE c.deleted=false")
    Iterable<CreditCard> findAllActive();

    @Query("SELECT c FROM CreditCard c WHERE c.deleted=true")
    Iterable<CreditCard> findAllDeleted();

    @Query("SELECT c FROM CreditCard c WHERE c.folder.id=:folderId and c.deleted=false")
    Iterable<CreditCard> findAllByFolderId(int folderId);

    @Transactional
    @Modifying
    @Query("DELETE FROM CreditCard c WHERE c.id=:id")
    int deleteById(int id);

    @Transactional
    @Modifying
    @Query("DELETE FROM CreditCard c WHERE c.deleted=true")
    int deleteFromTrash();

    @Transactional
    @Modifying
    @Query("UPDATE CreditCard c SET c.deleted=true WHERE c.id=:id")
    int moveToTrash(int id);

    @Transactional
    @Modifying
    @Query("UPDATE CreditCard c SET c.deleted=false WHERE c.id=:id")
    int restoreFromTrash(int id);
}
