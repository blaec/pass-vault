package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.Folder;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CrudFolderRepository extends CrudRepository<Folder, Integer> {

    @Transactional
    @Modifying
    @Query("DELETE FROM Folder f WHERE f.id=:id")
    int deleteById(int id);
}
