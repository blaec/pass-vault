package com.blaec.passvault.service;

import com.blaec.passvault.model.BaseItem;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.FullItemTo;
import org.springframework.transaction.annotation.Transactional;

public interface ItemService<T extends BaseItem> {
    Iterable<T> getAll();
    Iterable<T> getAllByFolderId(int folderId);
    @Transactional Response.Builder create(FullItemTo to);
    @Transactional Response.Builder update(FullItemTo to);
    @Transactional Response.Builder delete(int id);
}
