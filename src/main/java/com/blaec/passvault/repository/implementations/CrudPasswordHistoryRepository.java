package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.PasswordHistory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CrudPasswordHistoryRepository extends CrudRepository<PasswordHistory, Integer> {

    @Query("SELECT ph FROM PasswordHistory ph WHERE ph.password.id=:passwordId")
    Iterable<PasswordHistory> findAllByPasswordId(int passwordId);
}
