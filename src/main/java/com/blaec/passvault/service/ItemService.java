package com.blaec.passvault.service;

import com.blaec.passvault.model.BaseItem;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.BaseItemTo;
import org.springframework.transaction.annotation.Transactional;

public interface ItemService<T extends BaseItem, U extends BaseItemTo> {
    Iterable<T> getAll();
    Iterable<T> getAllByFolderId(int folderId);
    @Transactional
    Response.Builder create(U password);
    @Transactional Response.Builder update(U password);
    @Transactional Response.Builder delete(int id);
}
