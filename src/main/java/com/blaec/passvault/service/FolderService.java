package com.blaec.passvault.service;

import com.blaec.passvault.model.Folder;
import org.springframework.transaction.annotation.Transactional;

public interface FolderService {
    Iterable<Folder> getAll();
    Folder getByName(String name);
    @Transactional String save(Folder folder);
}
