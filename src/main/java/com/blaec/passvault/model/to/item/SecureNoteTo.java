package com.blaec.passvault.model.to.item;

import com.blaec.passvault.model.SecureNote;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class SecureNoteTo extends BaseItemTo {

    public static BaseItemTo from(SecureNote secureNote) {
        SecureNoteTo secureNoteTo = new SecureNoteTo();

        secureNoteTo.setId(secureNote.getId());
        secureNoteTo.setFolderId(secureNote.getFolderId());
        secureNoteTo.setFolderName(secureNote.getFolderName());
        secureNoteTo.setTitle(secureNote.getTitle());
        secureNoteTo.setNote(secureNote.getNote());
        secureNoteTo.setCreationDate(String.valueOf(secureNote.getCreationDate()));

        return secureNoteTo;
    }
}
