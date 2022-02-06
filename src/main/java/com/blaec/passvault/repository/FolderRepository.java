package com.blaec.passvault.repository;

import com.blaec.passvault.model.Folder;

public interface FolderRepository {
    Iterable<Folder> getAll();
    Folder getByName(String name);
    Folder save(Folder folder);
    boolean isDeleted(int id);
}
