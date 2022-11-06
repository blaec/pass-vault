package com.blaec.passvault.repository;

import com.blaec.passvault.model.BaseItem;
import org.hibernate.cfg.NotYetImplementedException;

import java.util.Optional;

public interface ItemRepository<T extends BaseItem> {
    Iterable<T> getAllActive();
    Iterable<T> getAllDeleted();
    Iterable<T> getAllByFolderId(int folderId);
    default Optional<T> getById(int id) {
        throw new NotYetImplementedException();
    }
    T save(T item);
    boolean isMovedToTrash(int id);
    boolean isRestoredFromTrash(int id);
    boolean isDeleted(int id);
    int emptyTrash();
}
