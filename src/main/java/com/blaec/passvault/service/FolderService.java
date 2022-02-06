package com.blaec.passvault.service;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.response.Response;
import org.springframework.transaction.annotation.Transactional;

public interface FolderService {
    Iterable<Folder> getAll();
    Folder getByName(String name);
    @Transactional Response.Builder save(Folder folder);
    @Transactional Response.Builder delete(int id);
}
