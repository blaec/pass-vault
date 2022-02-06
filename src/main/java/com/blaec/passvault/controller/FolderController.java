package com.blaec.passvault.controller;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.service.FolderService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@AllArgsConstructor
@RequestMapping(FolderController.URL)
@CrossOrigin(origins = "*")
@RestController
public class FolderController extends AbstractController{
    static final String URL = API_VERSION + "/folders";
    private final FolderService folderService;

    @GetMapping("/get-all")
    public Iterable<Folder> getAll() {
        return folderService.getAll();
    }

    @PostMapping("/create/{name}")
    public Response saveFolder(@PathVariable String name) {
        log.info("saving folder | {}", name);
        return folderService.save(Folder.from(name)).build();
    }

    @PostMapping("/update/{name}")
    public Response updateFolder(@PathVariable String name) {
        log.info("updating folder | {}", name);
        return folderService.update(Folder.from(name)).build();
    }

    @DeleteMapping("/delete/{id}")
    public Response delete(@PathVariable int id) {
        log.info("deleting folder | #{}", id);
        return folderService.delete(id).build();
    }
}
