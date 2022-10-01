package com.blaec.passvault.model.to.item;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter(AccessLevel.PROTECTED)
public abstract class BaseItemTo {
    private String id;
    private int folderId;
    private String folderName;
    private String title;
    private String note;
    private String creationDate;
}
