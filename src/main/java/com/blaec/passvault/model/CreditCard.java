package com.blaec.passvault.model;

import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.utils.DateTimeUtils;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;

@Slf4j
@Entity
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "credit_cards")
public class CreditCard extends BaseItem {
    @NonNull private String cardHolderName;
    private long cardNumber;
    @NonNull private String expirationDate;
    private int cvv;
    private int cardPin;

    public static CreditCard from(FullItemTo passwordTo, Folder folder) {
        CreditCard created = new CreditCard();

        created.id = passwordTo.getId();
        created.folder = folder;
        created.title = passwordTo.getTitle();
        created.cardHolderName = passwordTo.getCardHolderName();
        created.cardNumber = passwordTo.getCardNumber();
        created.expirationDate = passwordTo.getExpirationDate();
        created.cvv = passwordTo.getCvv();
        created.cardPin = passwordTo.getCardPin();
        created.note = passwordTo.getNote();
        created.creationDate = LocalDate.parse(passwordTo.getCreationDate(), DateTimeUtils.formatter);

        return created;
    }
}
