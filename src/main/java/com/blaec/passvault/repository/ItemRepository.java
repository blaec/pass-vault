package com.blaec.passvault.repository;

import com.blaec.passvault.model.BaseItem;

public interface ItemRepository<T extends BaseItem> {
    Iterable<T> getAll();
    Iterable<T> getAllByFolderId(int folderId);
    T save(T password);
    boolean isDeleted(int id);
}
