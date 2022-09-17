package com.blaec.passvault.model.to.item;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter(AccessLevel.PROTECTED)
public abstract class ItemTo {
    private Integer id;
    private int folderId;
    private String title;
    private String note;
    private String creationDate;
}
