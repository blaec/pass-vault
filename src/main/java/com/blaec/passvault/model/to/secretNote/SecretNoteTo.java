package com.blaec.passvault.model.to.secretNote;

import com.blaec.passvault.model.to.BaseItemTo;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class SecretNoteTo implements BaseItemTo {
    private final Integer secretNoteId;
    private final int folderId;
    private final String title;
    private final String note;
    private final String creationDate;
}
