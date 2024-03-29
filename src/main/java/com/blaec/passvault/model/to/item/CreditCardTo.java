package com.blaec.passvault.model.to.item;

import com.blaec.passvault.enums.ItemType;
import com.blaec.passvault.model.CreditCard;
import com.blaec.passvault.utils.IdUtils;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CreditCardTo extends BaseItemTo {
    private String cardholderName;
    private long cardNumber;
    private String expirationDate;
    private int cvv;
    private int cardPin;

    public static BaseItemTo from(CreditCard creditCard) {
        CreditCardTo creditCardTo = new CreditCardTo();

        creditCardTo.setId(IdUtils.fromModel(ItemType.creditCards, creditCard.getId()));
        creditCardTo.setFolderId(creditCard.getFolderId());
        creditCardTo.setFolderName(creditCard.getFolderName());
        creditCardTo.setTitle(creditCard.getTitle());
        creditCardTo.setNote(creditCard.getNote());
        creditCardTo.setCreationDate(String.valueOf(creditCard.getCreationDate()));
        creditCardTo.setCardholderName(creditCard.getCardholderName());
        creditCardTo.setCardNumber(creditCard.getCardNumber());
        creditCardTo.setCvv(creditCard.getCvv());
        creditCardTo.setExpirationDate(String.valueOf(creditCard.getExpirationDate()));
        creditCardTo.setCardPin(creditCard.getCardPin());

        return creditCardTo;
    }
}
