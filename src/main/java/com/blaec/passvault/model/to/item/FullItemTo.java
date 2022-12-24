package com.blaec.passvault.model.to.item;

import com.blaec.passvault.enums.ItemType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class FullItemTo extends BaseItemTo {
    private ItemType itemType;

    // password fields
    private String user;
    private String password;
    private String website;
    private int age;

    // credit card fields
    private String cardholderName;
    private long cardNumber;
    private String expirationDate;
    private int cvv;
    private int cardPin;
}
