package com.blaec.passvault.controller;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.service.FolderService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@AllArgsConstructor
@RequestMapping(FolderController.URL)
@CrossOrigin(origins = "*")
@RestController
public class FolderController extends AbstractController{
    static final String URL = API_VERSION + "/folder";
    private final FolderService folderService;

    @GetMapping("/get-all")
    public Iterable<Folder> getAll() {
        return folderService.getAll();
    }

    @PostMapping("/create/{name}")
    public String saveWishMovie(@PathVariable String name) {
        log.info("saving folder | {}", name);
        return folderService.save(Folder.from(name));
    }
}
