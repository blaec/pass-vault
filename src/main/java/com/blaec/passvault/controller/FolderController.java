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
    static final String URL = API_VERSION + "/folder";
    private final FolderService folderService;

    @GetMapping("/get-all")
    public Iterable<Folder> getAll() {
        return folderService.getAll();
    }

    @PostMapping("/create/{name}")
    public Response saveFolder(@PathVariable String name) {
        log.info("saving folder | {}", name);
        return folderService.create(Folder.from(name)).build();
    }

    @PutMapping("/update")
    public Response updateFolder(@RequestBody Folder folder) {
        log.info("updating folder | {}", folder.getName());
        return folderService.update(folder).build();
    }

    @DeleteMapping("/delete/{id}")
    public Response delete(@PathVariable int id) {
        log.info("deleting folder | #{}", id);
        return folderService.delete(id).build();
    }
}
