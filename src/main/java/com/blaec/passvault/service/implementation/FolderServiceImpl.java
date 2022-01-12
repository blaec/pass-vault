package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.repository.FolderRepository;
import com.blaec.passvault.service.FolderService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class FolderServiceImpl implements FolderService {
    private final FolderRepository folderRepository;


    @Override
    public Iterable<Folder> getAll() {
        return folderRepository.getAll();
    }

    @Override
    public Folder getByName(String name) {
        return folderRepository.getByName(name);
    }

    @Override
    public Response save(Folder folder) {
        Response.Builder response = Response.Builder.create();
        try {
            Folder saved = folderRepository.save(folder);
            log.info("Folder {} successfully saved", saved.getName());
            response.setSuccess("success");
        } catch (Exception e) {
            response.setFailure("failure");
        }
        return response.build();
    }
}
