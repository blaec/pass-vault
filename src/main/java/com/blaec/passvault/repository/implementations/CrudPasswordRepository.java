package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.Password;
import org.springframework.data.repository.CrudRepository;

public interface CrudPasswordRepository extends CrudRepository<Password, Integer> {
}
