package com.blaec.passvault.controller;

import com.blaec.passvault.enums.ItemType;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.SecretNote;
import com.blaec.passvault.model.to.item.ItemTo;
import com.blaec.passvault.model.to.password.PasswordTo;
import com.blaec.passvault.model.to.secretNote.SecretNoteTo;
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

    private final ItemService<Password, PasswordTo> passwordService;
    private final ItemService<SecretNote, SecretNoteTo> secretNoteService;

    @GetMapping("/get-all")
    public Map<ItemType, List<ItemTo>> getAll() {
        return Map.of(
                ItemType.passwords,  mappedPasswords(passwordService.getAll()),
                ItemType.secretNotes, mappedSecretNotes(secretNoteService.getAll())
        );
    }


    @GetMapping("/get-all-by-folder/{folderId}")
    public Map<ItemType, List<ItemTo>> getAll(@PathVariable int folderId) {
        return Map.of(
                ItemType.passwords, mappedPasswords(passwordService.getAllByFolderId(folderId)),
                ItemType.secretNotes, mappedSecretNotes(secretNoteService.getAllByFolderId(folderId))
        );
    }

    @GetMapping("/get-all/{itemType}")
    public List<ItemTo> getAllByType(@PathVariable ItemType itemType) {
        if (itemType == ItemType.passwords) {
            return mappedPasswords(passwordService.getAll());
        } else if (itemType == ItemType.secretNotes) {
            return mappedSecretNotes(secretNoteService.getAll());
        } else {
            throw new IllegalArgumentException();
        }
    }
}
