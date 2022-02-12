package com.blaec.passvault.repository;

import com.blaec.passvault.model.Folder;

import java.util.Optional;

public interface FolderRepository {
    Iterable<Folder> getAll();
    Optional<Folder> getById(int id);
    Optional<Folder> save(Folder folder);
    boolean isDeleted(int id);
}
