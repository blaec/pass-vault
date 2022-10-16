package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.CreditCard;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CrudCreditCardRepository extends CrudRepository<CreditCard, Integer> {

    @Query("SELECT c FROM CreditCard c WHERE c.deleted=false")
    Iterable<CreditCard> findAllActive();

    @Query("SELECT p FROM CreditCard p WHERE p.folder.id=:folderId")
    Iterable<CreditCard> findAllByFolderId(int folderId);

    @Transactional
    @Modifying
    @Query("DELETE FROM CreditCard p WHERE p.id=:id")
    int deleteById(int id);

    @Transactional
    @Modifying
    @Query("UPDATE CreditCard c SET c.deleted=true WHERE c.id=:id")
    int setDeleted(int id);
}
