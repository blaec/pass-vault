package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.CreditCard;
import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.repository.FolderRepository;
import com.blaec.passvault.repository.ItemRepository;
import com.blaec.passvault.service.ItemService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.function.BooleanSupplier;

@Slf4j
@AllArgsConstructor
@Service
public class CreditCardServiceImpl implements ItemService<CreditCard> {
    private final ItemRepository<CreditCard> creditCardRepository;
    private final FolderRepository folderRepository;

    @Override
    public Iterable<CreditCard> getAllActive() {
        return creditCardRepository.getAllActive();
    }

    @Override
    public Iterable<CreditCard> getAllDeleted() {
        return creditCardRepository.getAllDeleted();
    }

    @Override
    public Iterable<CreditCard> getAllByFolderId(int folderId) {
        return creditCardRepository.getAllByFolderId(folderId);
    }

    @Override
    public Response.Builder create(FullItemTo to) {
        return save(createCreditCardFrom(to), String.format("Credit card %s successfully saved", to.getTitle()));
    }

    @Override
    public Response.Builder update(FullItemTo to) {
        return save(createCreditCardFrom(to), String.format("Credit card %s successfully updated", to.getTitle()));
    }

    private CreditCard createCreditCardFrom(FullItemTo to) {
        Folder folder = folderRepository.getById(to.getFolderId()).orElse(null);
        return CreditCard.from(to, Objects.requireNonNull(folder, "folder not supplied"));
    }

    private Response.Builder save(CreditCard creditCard, String message) {
        return ItemServiceUtils.save(() -> creditCardRepository.save(creditCard), message);
    }

    @Override
    public Response.Builder restoreFromTrash(int id) {
        BooleanSupplier isRestoredFromTrash = () -> creditCardRepository.isRestoredFromTrash(id);
        String message = String.format("restored | credit card with id %d", id);

        return ItemServiceUtils.handleExistingItem(isRestoredFromTrash, message);
    }

    @Override
    public Response.Builder moveToTrash(int id) {
        BooleanSupplier isMovedToTrash = () -> creditCardRepository.isMovedToTrash(id);
        String message = String.format("moved to trash | credit card with id %d", id);

        return ItemServiceUtils.handleExistingItem(isMovedToTrash, message);
    }

    @Override
    public Response.Builder delete(int id) {
        BooleanSupplier isDeleted = () -> creditCardRepository.isDeleted(id);
        String message = String.format("deleted | credit card with id %d", id);

        return ItemServiceUtils.handleExistingItem(isDeleted, message);
    }
}
