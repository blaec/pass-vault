package com.blaec.passvault.service;

import com.blaec.passvault.enums.HealthType;
import com.blaec.passvault.model.BaseItem;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.BaseItemTo;
import com.blaec.passvault.model.to.item.FullItemTo;
import org.hibernate.cfg.NotYetImplementedException;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

public interface ItemService<T extends BaseItem> {
    Iterable<T> getAllActive();
    Iterable<T> getAllDeleted();
    Iterable<T> getAllByFolderId(int folderId);
    default Map<HealthType, Iterable<BaseItemTo>> getAllHealthPasswords() {
        throw new NotYetImplementedException();
    }
    @Transactional Response.Builder create(FullItemTo to);
    @Transactional Response.Builder update(FullItemTo to);
    @Transactional Response.Builder restoreFromTrash(int id);
    @Transactional Response.Builder moveToTrash(int id);
    @Transactional Response.Builder delete(int id);
    @Transactional boolean emptyTrash();
}
