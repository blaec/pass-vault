package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.CreditCard;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CrudCreditCardRepository extends CrudRepository<CreditCard, Integer> {

    @Transactional
    @Modifying
    @Query("DELETE FROM CreditCard p WHERE p.id=:id")
    int deleteById(int id);

    @Query("SELECT p FROM CreditCard p WHERE p.folder.id=:folderId")
    Iterable<CreditCard> findAllByFolderId(int folderId);}
