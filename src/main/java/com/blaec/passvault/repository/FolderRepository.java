package com.blaec.passvault.repository;

import com.blaec.passvault.model.Folder;

public interface FolderRepository {
    Iterable<Folder> getAll();
    Folder save(Folder folder);
}
