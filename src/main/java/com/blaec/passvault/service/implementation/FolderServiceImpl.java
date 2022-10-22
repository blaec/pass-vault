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
    public Response.Builder create(Folder folder) {
        return save(folder, "Folder %s successfully created");
    }

    @Override
    public Response.Builder update(Folder folder) {
        return save(folder, "Folder %s successfully updated");
    }

    private Response.Builder save(Folder folder, String message) {
        Response.Builder response = Response.Builder.create();
        try {
            Folder saved = folderRepository.save(folder)
                    .orElseThrow(IllegalArgumentException::new);
            String finalMessage = String.format(message, saved.getName());
            log.info(finalMessage);
            response.setSuccess(finalMessage);
        } catch (Exception e) {
            response.setFailure("Failed to save/update folder " + folder.getName());
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
