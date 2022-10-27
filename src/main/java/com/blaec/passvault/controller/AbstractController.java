package com.blaec.passvault.controller;

import com.blaec.passvault.enums.ItemType;
import com.blaec.passvault.model.CreditCard;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.SecureNote;
import com.blaec.passvault.model.to.item.BaseItemTo;
import com.blaec.passvault.model.to.item.CreditCardTo;
import com.blaec.passvault.model.to.item.PasswordTo;
import com.blaec.passvault.model.to.item.SecureNoteTo;
import com.blaec.passvault.utils.IdUtils;
import lombok.extern.slf4j.Slf4j;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Slf4j
public abstract class AbstractController {
    protected static final String API_VERSION = "/api/v1";

    protected List<BaseItemTo> mappedPasswords(Iterable<Password> passwords) {
        return StreamSupport.stream(passwords.spliterator(), false)
                .map(PasswordTo::from)
                .sorted(Comparator.comparing(BaseItemTo::getCreationDate).reversed())
                .collect(Collectors.toList());
    }

    protected List<BaseItemTo> mappedSecureNotes(Iterable<SecureNote> secureNotes) {
        return StreamSupport.stream(secureNotes.spliterator(), false)
                .map(SecureNoteTo::from)
                .sorted(Comparator.comparing(BaseItemTo::getCreationDate).reversed())
                .collect(Collectors.toList());
    }

    protected List<BaseItemTo> mappedCreditCards(Iterable<CreditCard> creditCards) {
        return StreamSupport.stream(creditCards.spliterator(), false)
                .map(CreditCardTo::from)
                .sorted(Comparator.comparing(BaseItemTo::getCreationDate).reversed())
                .collect(Collectors.toList());
    }

    protected Integer extractIdAndLogAction(ItemType itemType, String id, String message) {
        Integer itemId = IdUtils.toModel(id);
        log.info(message, itemType, itemId);

        return itemId;
    }
}
