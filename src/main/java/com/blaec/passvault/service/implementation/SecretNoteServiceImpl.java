package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.SecretNote;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.secretNote.SecretNoteTo;
import com.blaec.passvault.repository.SecretNoteRepository;
import com.blaec.passvault.service.SecretNoteService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Slf4j
@AllArgsConstructor
@Service
public class SecretNoteServiceImpl implements SecretNoteService {
    private final SecretNoteRepository secretNoteRepository;

    @Override
    public Iterable<SecretNote> getAll() {
        return secretNoteRepository.getAll();
    }

    @Override
    public Iterable<SecretNote> getAllByFolderId(int folderId) {
        return secretNoteRepository.getAllByFolderId(folderId);
    }

    @Override
    public Response.Builder create(SecretNoteTo secretNoteTo, Folder folder) {
        SecretNote secretNote = SecretNote.from(secretNoteTo, Objects.requireNonNull(folder, "folder not supplied"));
        return save(secretNote, "Secret note for {} successfully saved");
    }

    @Override
    public Response.Builder update(SecretNoteTo secretNoteTo, Folder folder) {
        SecretNote secretNote = SecretNote.from(secretNoteTo, Objects.requireNonNull(folder, "folder not supplied"));
        return save(secretNote, "Password for {} successfully updated");
    }

    private Response.Builder save(SecretNote secretNote, String message) {
        Response.Builder response = Response.Builder.create();
        try {
            SecretNote saved = secretNoteRepository.save(secretNote);
            log.info(message, saved.getTitle());
            response.setSuccess("success");
        } catch (Exception e) {
            response.setFailure("failure");
        }

        return response;
    }

   @Override
    public Response.Builder delete(int id) {
       Response.Builder response = Response.Builder.create();

       if (secretNoteRepository.isDeleted(id)) {
           String message = String.format("deleted | secret note with id %d", id);
           log.info(message);
           response.setSuccess(message);
       } else {
           throw new IllegalStateException();
       }

       return response;
    }
}
