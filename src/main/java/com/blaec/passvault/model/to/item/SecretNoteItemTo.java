package com.blaec.passvault.model.to.item;

import com.blaec.passvault.model.SecretNote;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Setter(AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class SecretNoteItemTo extends ItemTo {

    public static ItemTo from(SecretNote secretNote) {
        SecretNoteItemTo secretNoteItemTo = new SecretNoteItemTo();

        secretNoteItemTo.setId(secretNote.getId());
        secretNoteItemTo.setFolderId(secretNote.getFolderId());
        secretNoteItemTo.setFolderName(secretNote.getFolderName());
        secretNoteItemTo.setTitle(secretNote.getTitle());
        secretNoteItemTo.setNote(secretNote.getNote());
        secretNoteItemTo.setCreationDate(String.valueOf(secretNote.getCreationDate()));

        return secretNoteItemTo;
    }
}
