package com.blaec.passvault.controller;

import com.blaec.passvault.model.SecureNote;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.secureNote.SecureNoteTo;
import com.blaec.passvault.service.ItemService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@AllArgsConstructor
@RequestMapping(SecureNoteController.URL)
@CrossOrigin(origins = "*")
@RestController
public class SecureNoteController extends AbstractController {
    static final String URL = API_VERSION + "/secure-note";
    private final ItemService<SecureNote> secureNoteService;

    @GetMapping("/get-all")
    public Iterable<SecureNote> getAll() {
        return secureNoteService.getAll();
    }

    @GetMapping("/get-all-by-folder/{folderId}")
    public Iterable<SecureNote> getAll(@PathVariable int folderId) {
        return secureNoteService.getAllByFolderId(folderId);
    }

    @PostMapping("/create")
    public Response saveSecureNote(@RequestBody SecureNoteTo secureNoteTo) {
        log.info("saving secure note | {}", secureNoteTo.getTitle());
//        return secureNoteService.create(secureNoteTo).build();
        return Response.Builder.create().setFailure("old version").build();
    }

    @PutMapping("/update")
    public Response updateSecureNote(@RequestBody SecureNoteTo secureNoteTo) {
        log.info("updating secure note | {}", secureNoteTo.getTitle());
//        return secureNoteService.update(secureNoteTo).build();
        return Response.Builder.create().setFailure("old version").build();
    }

    @DeleteMapping("/delete/{id}")
    public Response delete(@PathVariable int id) {
        log.info("deleting secure note | #{}", id);
        return secureNoteService.delete(id).build();
    }
}
