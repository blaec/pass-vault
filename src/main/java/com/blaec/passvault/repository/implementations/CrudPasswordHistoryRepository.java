package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.PasswordHistory;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CrudPasswordHistoryRepository extends CrudRepository<PasswordHistory, Integer> {

    @Query("SELECT ph FROM PasswordHistory ph WHERE ph.password.id=:passwordId")
    List<PasswordHistory> findAllByPasswordId(int passwordId);

    @Query("SELECT ph FROM PasswordHistory ph WHERE ph.password.id IN (:ids)")
    List<PasswordHistory> findAllByIds(List<Integer> ids);

    @Transactional
    @Modifying
    @Query("DELETE FROM PasswordHistory ph WHERE ph.password.id=:id")
    int deleteByPasswordId(int id);

    @Transactional
    @Modifying
    @Query("DELETE FROM PasswordHistory ph WHERE ph.password.id IN (:ids)")
    int deleteByPasswordIds(List<Integer> ids);
}
