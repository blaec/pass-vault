package com.blaec.passvault.controller;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.PasswordTo;
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
    public Response saveWishMovie(@RequestBody PasswordTo passwordTo) {
        log.info("saving password | {}", passwordTo.getTitle());
        Folder folder = folderService.getByName(passwordTo.getFolder());
        Password password = Password.from(passwordTo, folder);
        return passwordService.save(password);
    }
}
