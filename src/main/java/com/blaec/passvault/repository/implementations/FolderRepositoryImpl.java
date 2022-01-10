package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.repository.FolderRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@AllArgsConstructor
@Repository
public class FolderRepositoryImpl implements FolderRepository {
    private final CrudFolderRepository crudFolderRepository;

    @Override
    public Iterable<Folder> getAll() {
        return crudFolderRepository.findAll();
    }

    @Override
    public Folder save(Folder folder) {
        return crudFolderRepository.save(folder);
    }
}
