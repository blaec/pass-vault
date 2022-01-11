package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.Folder;
import org.springframework.data.repository.CrudRepository;

public interface CrudFolderRepository extends CrudRepository<Folder, Integer> {
    Folder findByName(String name);
}
