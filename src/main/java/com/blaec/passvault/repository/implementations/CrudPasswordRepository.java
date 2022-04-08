package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.Password;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CrudPasswordRepository extends CrudRepository<Password, Integer> {

    @Transactional
    @Modifying
    @Query("DELETE FROM Password p WHERE p.id=:id")
    int deleteById(int id);
}
