package com.blaec.passvault.repository;

import com.blaec.passvault.model.BaseItem;

public interface ItemRepository<T extends BaseItem> {
    Iterable<T> getAllActive();
    Iterable<T> getAllDeleted();
    Iterable<T> getAllByFolderId(int folderId);
    T save(T item);
    boolean isMovedToTrash(int id);
    boolean isDeleted(int id);
}
