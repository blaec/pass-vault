package com.blaec.passvault.controller;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.SecretNote;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.secretNote.SecretNoteTo;
import com.blaec.passvault.service.FolderService;
import com.blaec.passvault.service.SecretNoteService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@AllArgsConstructor
@RequestMapping(SecretNoteController.URL)
@CrossOrigin(origins = "*")
@RestController
public class SecretNoteController extends AbstractController {
    static final String URL = API_VERSION + "/secret-note";
    private final SecretNoteService secretNoteService;
    private final FolderService folderService;

    @GetMapping("/get-all")
    public Iterable<SecretNote> getAll() {
        return secretNoteService.getAll();
    }

    @GetMapping("/get-all-by-folder/{folderId}")
    public Iterable<SecretNote> getAll(@PathVariable int folderId) {
        return secretNoteService.getAllByFolderId(folderId);
    }

    @PostMapping("/create")
    public Response saveSecretNote(@RequestBody SecretNoteTo secretNoteTo) {
        log.info("saving secret note | {}", secretNoteTo.getTitle());
        Folder folder = folderService.getById(secretNoteTo.getFolderId())
                .orElse(null);

        return secretNoteService.create(secretNoteTo, folder).build();
    }

    @PutMapping("/update")
    public Response updateSecretNote(@RequestBody SecretNoteTo secretNoteTo) {
        log.info("updating secret note | {}", secretNoteTo.getTitle());
        Folder folder = folderService.getById(secretNoteTo.getFolderId())
                .orElse(null);

        return secretNoteService.update(secretNoteTo, folder).build();
    }

    @DeleteMapping("/delete/{id}")
    public Response delete(@PathVariable int id) {
        log.info("deleting secret note | #{}", id);
        return secretNoteService.delete(id).build();
    }
}
