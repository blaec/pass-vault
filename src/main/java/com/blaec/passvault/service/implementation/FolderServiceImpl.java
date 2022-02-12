package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.repository.FolderRepository;
import com.blaec.passvault.service.FolderService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

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
    public Optional<Folder> getById(int folderId) {
        return folderRepository.getById(folderId);
    }

    @Override
    public Response.Builder save(Folder folder) {
        Response.Builder response = Response.Builder.create();
        try {
            Folder saved = folderRepository.save(folder)
                    .orElseThrow(IllegalArgumentException::new);
            log.info("Folder {} successfully saved", saved.getName());
            response.setSuccess("success");
        } catch (Exception e) {
            response.setFailure("failure");
        }
        return response;
    }

    @Override
    public Response.Builder update(Folder folder) {
        Response.Builder response = Response.Builder.create();
        try {
            Folder updatedFolder = folderRepository.save(folder)
                    .orElseThrow(IllegalArgumentException::new);
            response.setSuccess(updatedFolder.getName());
        } catch (Exception e) {
            String message = String.format("Failed to update folder | %s", folder);
            log.error(message, e);
            response.setFailure(message);
        }
        return response;
    }

    @Override
    public Response.Builder delete(int id) {
        Response.Builder response = Response.Builder.create();

        if (folderRepository.isDeleted(id)) {
            String message = String.format("deleted | folder with id %d", id);
            log.info(message);
            response.setSuccess(message);
        } else {
            throw new IllegalStateException();
        }

        return response;
    }
}
