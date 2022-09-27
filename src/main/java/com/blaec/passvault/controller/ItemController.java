package com.blaec.passvault.controller;

import com.blaec.passvault.enums.ItemType;
import com.blaec.passvault.model.BaseItem;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.SecureNote;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.model.to.item.ItemTo;
import com.blaec.passvault.service.ItemService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@AllArgsConstructor
@RequestMapping(ItemController.URL)
@CrossOrigin(origins = "*")
@RestController
public class ItemController extends AbstractController {
    static final String URL = API_VERSION + "/items";

    private final ItemService<Password> passwordService;
    private final ItemService<SecureNote> secureNoteService;

    @GetMapping("/get-all")
    public Map<ItemType, List<ItemTo>> getAll() {
        return Map.of(
                ItemType.passwords, mappedPasswords(passwordService.getAll()),
                ItemType.secureNotes, mappedSecureNotes(secureNoteService.getAll())
        );
    }

    @GetMapping("/get-all-in-folder/{folderId}")
    public Map<ItemType, List<ItemTo>> getAllInFolder(@PathVariable int folderId) {
        return Map.of(
                ItemType.passwords, mappedPasswords(passwordService.getAllByFolderId(folderId)),
                ItemType.secureNotes, mappedSecureNotes(secureNoteService.getAllByFolderId(folderId))
        );
    }

//    @GetMapping("/get-all-by-type/{itemType}")
//    public List<ItemTo> getAllByType(@PathVariable ItemType itemType) {
//        if (itemType == ItemType.passwords) {
//            return mappedPasswords(passwordService.getAll());
//        } else if (itemType == ItemType.secureNotes) {
//            return mappedSecureNotes(secureNoteService.getAll());
//        } else {
//            throw new IllegalArgumentException();
//        }
//    }

    @PostMapping("/create")
    public Response saveItem(@RequestBody FullItemTo to) {
        log.info("saving to {} | {}", to.getItemType(), to.getTitle());
        return serviceFactory(to.getItemType()).create(to).build();
    }

    @PutMapping("/update")
    public Response updateItem(@RequestBody FullItemTo to) {
        log.info("updating in {} | {}", to.getItemType(), to.getTitle());
        return serviceFactory(to.getItemType()).update(to).build();
    }

    @DeleteMapping("/delete/{itemType}/{id}")
    public Response delete(
            @PathVariable ItemType itemType,
            @PathVariable int id
    ) {
        log.info("deleting from {} | #{}", itemType, id);
        return serviceFactory(itemType).delete(id).build();
    }

    @SuppressWarnings("unchecked")
    private <T extends BaseItem> ItemService<T> serviceFactory(ItemType itemType) {
        if (itemType == ItemType.passwords) {
            return (ItemService<T>) passwordService;
        } else if (itemType == ItemType.secureNotes) {
            return (ItemService<T>) secureNoteService;
        } else {
            throw new IllegalArgumentException();
        }
    }
}
