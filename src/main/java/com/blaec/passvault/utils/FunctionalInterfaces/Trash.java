package com.blaec.passvault.utils.FunctionalInterfaces;

import com.blaec.passvault.model.BaseItem;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.service.ItemService;

@FunctionalInterface
public interface Trash<T extends BaseItem> {
    boolean isEmpty(Response.Builder response, ItemService<T> service, String message);

    static <T extends BaseItem> boolean empty(Response.Builder res, ItemService<T> service, String message) {
        if (!service.emptyTrash()) {
            res.updateMessage(message, false);
            return false;
        }
        return true;
    }
}
