package com.blaec.passvault.controller;

import com.blaec.passvault.enums.HealthType;
import com.blaec.passvault.enums.ItemType;
import com.blaec.passvault.model.BaseItem;
import com.blaec.passvault.model.CreditCard;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.SecureNote;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.BaseItemTo;
import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.service.ItemService;
import com.blaec.passvault.service.PasswordService;
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

    private final PasswordService healthService;
    private final ItemService<Password> passwordService;
    private final ItemService<SecureNote> secureNoteService;
    private final ItemService<CreditCard> creditCardService;

    @GetMapping("/get-all-active")
    public Map<ItemType, List<BaseItemTo>> getAllActive() {
        return Map.of(
                ItemType.passwords, mappedPasswords(passwordService.getAllActive()),
                ItemType.secureNotes, mappedSecureNotes(secureNoteService.getAllActive()),
                ItemType.creditCards, mappedCreditCards(creditCardService.getAllActive())
        );
    }

    @GetMapping("/get-all-deleted")
    public Map<ItemType, List<BaseItemTo>> getAllDeleted() {
        return Map.of(
                ItemType.passwords, mappedPasswords(passwordService.getAllDeleted()),
                ItemType.secureNotes, mappedSecureNotes(secureNoteService.getAllDeleted()),
                ItemType.creditCards, mappedCreditCards(creditCardService.getAllDeleted())
        );
    }

    @GetMapping("/get-all-in-folder/{folderId}")
    public Map<ItemType, List<BaseItemTo>> getAllInFolder(@PathVariable int folderId) {
        return Map.of(
                ItemType.passwords, mappedPasswords(passwordService.getAllByFolderId(folderId)),
                ItemType.secureNotes, mappedSecureNotes(secureNoteService.getAllByFolderId(folderId)),
                ItemType.creditCards, mappedCreditCards(creditCardService.getAllByFolderId(folderId))
        );
    }

    @GetMapping("/get-all-health-items")
    public Map<HealthType, Iterable<BaseItemTo>> getAllHealthItems() {
        return healthService.getAllHealthPasswords();
    }

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

    @PutMapping("/restore/{itemType}/{id}")
    public Response restore(
            @PathVariable ItemType itemType,
            @PathVariable String id
    ) {
        return serviceFactory(itemType)
                .restoreFromTrash(extractIdAndLogAction(itemType, id, "restoring from {} trash | #{}"))
                .build();
    }

    @PutMapping("/move-to-trash/{itemType}/{id}")
    public Response moveToTrash(
            @PathVariable ItemType itemType,
            @PathVariable String id
    ) {
        return serviceFactory(itemType)
                .moveToTrash(extractIdAndLogAction(itemType, id, "moving {} to trash | #{}"))
                .build();
    }

    @DeleteMapping("/delete/{itemType}/{id}")
    public Response delete(
            @PathVariable ItemType itemType,
            @PathVariable String id
    ) {
        return serviceFactory(itemType)
                .delete(extractIdAndLogAction(itemType, id, "deleting from {} | #{}"))
                .build();
    }

    @DeleteMapping("/delete/from-trash")
    public Response emptyTrash() {
        boolean isPasswordsRemoved = passwordService.emptyTrash();
        boolean isSecureNotesRemoved = secureNoteService.emptyTrash();
        boolean isCreditCardsRemoved = creditCardService.emptyTrash();
        Response.Builder response = Response.Builder.create();
        if (isPasswordsRemoved && isSecureNotesRemoved && isCreditCardsRemoved) {
            response.setSuccess("Trash is empty");
        } else if (isPasswordsRemoved) {
            response.updateMessage("Failed to remove passwords", false);
        } else if (isSecureNotesRemoved) {
            response.updateMessage("Failed to remove secure notes", false);
        } else if (isCreditCardsRemoved) {
            response.updateMessage("Failed to remove credit cards", false);
        }

        return response.build();
    }

    @SuppressWarnings("unchecked")
    private <T extends BaseItem> ItemService<T> serviceFactory(ItemType itemType) {
        if (itemType == ItemType.passwords) {
            return (ItemService<T>) passwordService;
        } else if (itemType == ItemType.secureNotes) {
            return (ItemService<T>) secureNoteService;
        } else if (itemType == ItemType.creditCards) {
            return (ItemService<T>) creditCardService;
        } else {
            throw new IllegalArgumentException();
        }
    }
}
