package com.blaec.passvault.controller;

import com.blaec.passvault.enums.ItemType;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.SecretNote;
import com.blaec.passvault.model.to.item.ItemTo;
import com.blaec.passvault.model.to.item.PasswordItemTo;
import com.blaec.passvault.model.to.item.SecretNoteItemTo;
import com.blaec.passvault.model.to.password.PasswordTo;
import com.blaec.passvault.model.to.secretNote.SecretNoteTo;
import com.blaec.passvault.service.ItemService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

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
        List<ItemTo> passwords = StreamSupport.stream(passwordService.getAll().spliterator(), false).map(PasswordItemTo::from).collect(Collectors.toList());
        List<ItemTo> secretNotes = StreamSupport.stream(secretNoteService.getAll().spliterator(), false).map(SecretNoteItemTo::from).collect(Collectors.toList());

        return Map.of(ItemType.passwords, passwords, ItemType.secretNotes, secretNotes);
    }
}
