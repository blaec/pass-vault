package com.blaec.passvault.model.to.item;

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
    private String cardHolderName;
    private long cardNumber;
    private String expirationDate;
    private int cvv;
    private int cardPin;
}
