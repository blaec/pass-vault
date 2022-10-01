package com.blaec.passvault.model;

import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.utils.DateTimeUtils;
import com.blaec.passvault.utils.IdUtils;
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
    @NonNull private String cardholderName;
    private long cardNumber;
    @NonNull private LocalDate expirationDate;
    private int cvv;
    private int cardPin;

    public static CreditCard from(FullItemTo creditCardTo, Folder folder) {
        CreditCard created = new CreditCard();

        created.id = IdUtils.toModel(creditCardTo.getId());
        created.folder = folder;
        created.title = creditCardTo.getTitle();
        created.cardholderName = creditCardTo.getCardholderName();
        created.cardNumber = creditCardTo.getCardNumber();
        created.expirationDate = LocalDate.parse(creditCardTo.getExpirationDate(), DateTimeUtils.formatter);
        created.cvv = creditCardTo.getCvv();
        created.cardPin = creditCardTo.getCardPin();
        created.note = creditCardTo.getNote();
        created.creationDate = LocalDate.parse(creditCardTo.getCreationDate(), DateTimeUtils.formatter);

        return created;
    }
}
