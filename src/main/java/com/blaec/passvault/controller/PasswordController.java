package com.blaec.passvault.controller;

import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.password.PasswordTo;
import com.blaec.passvault.service.ItemService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@AllArgsConstructor
@RequestMapping(PasswordController.URL)
@CrossOrigin(origins = "*")
@RestController
public class PasswordController extends AbstractController {
    static final String URL = API_VERSION + "/password";
    private final ItemService<Password> passwordService;

    @GetMapping("/get-all")
    public Iterable<Password> getAll() {
        return passwordService.getAll();
    }

    @GetMapping("/get-all-by-folder/{folderId}")
    public Iterable<Password> getAll(@PathVariable int folderId) {
        return passwordService.getAllByFolderId(folderId);
    }

    @PostMapping("/create")
    public Response savePassword(@RequestBody PasswordTo passwordTo) {
        log.info("saving password | {}", passwordTo.getTitle());
//        return passwordService.create(passwordTo).build();
        return Response.Builder.create().setFailure("old version").build();
    }

    @PutMapping("/update")
    public Response updatePassword(@RequestBody PasswordTo passwordTo) {
        log.info("updating password | {}", passwordTo.getTitle());
//        return passwordService.update(passwordTo).build();
        return Response.Builder.create().setFailure("old version").build();
    }

    @DeleteMapping("/delete/{id}")
    public Response delete(@PathVariable int id) {
        log.info("deleting password | #{}", id);
        return passwordService.delete(id).build();
    }
}
