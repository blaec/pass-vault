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
public class SecureNoteItemTo extends ItemTo {

    public static ItemTo from(SecureNote secureNote) {
        SecureNoteItemTo secureNoteItemTo = new SecureNoteItemTo();

        secureNoteItemTo.setId(secureNote.getId());
        secureNoteItemTo.setFolderId(secureNote.getFolderId());
        secureNoteItemTo.setFolderName(secureNote.getFolderName());
        secureNoteItemTo.setTitle(secureNote.getTitle());
        secureNoteItemTo.setNote(secureNote.getNote());
        secureNoteItemTo.setCreationDate(String.valueOf(secureNote.getCreationDate()));

        return secureNoteItemTo;
    }
}
