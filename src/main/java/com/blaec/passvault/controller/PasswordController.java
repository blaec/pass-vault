package com.blaec.passvault.controller;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.ExistingPasswordTo;
import com.blaec.passvault.model.to.NewPasswordTo;
import com.blaec.passvault.service.FolderService;
import com.blaec.passvault.service.PasswordService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@AllArgsConstructor
@RequestMapping(PasswordController.URL)
@CrossOrigin(origins = "*")
@RestController
public class PasswordController extends AbstractController{
    static final String URL = API_VERSION + "/password";
    private final PasswordService passwordService;
    private final FolderService folderService;

    @GetMapping("/get-all")
    public Iterable<Password> getAll() {
        return passwordService.getAll();
    }

    @PostMapping("/create")
    public Response savePassword(@RequestBody NewPasswordTo passwordTo) {
        log.info("saving password | {}", passwordTo.getTitle());
        Folder folder = folderService.getById(passwordTo.getFolderId())
                .orElse(null);

        return passwordService.create(passwordTo, folder).build();
    }

    @PutMapping("/update")
    public Response updatePassword(@RequestBody ExistingPasswordTo passwordTo) {
        log.info("updating password | {}", passwordTo.getTitle());
        Folder folder = folderService.getById(passwordTo.getFolderId())
                .orElse(null);

        return passwordService.update(passwordTo, folder).build();
    }

    @DeleteMapping("/delete/{id}")
    public Response delete(@PathVariable int id) {
        log.info("deleting password | #{}", id);
        return passwordService.delete(id).build();
    }
}
