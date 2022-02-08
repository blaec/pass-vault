package com.blaec.passvault.repository;

import com.blaec.passvault.model.Folder;

import java.util.Optional;

public interface FolderRepository {
    Iterable<Folder> getAll();
    Folder getByName(String name);
    Optional<Folder> save(Folder folder);
    boolean isDeleted(int id);
}
