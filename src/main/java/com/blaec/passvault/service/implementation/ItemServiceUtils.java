package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.response.Response;
import lombok.extern.slf4j.Slf4j;

import java.util.function.BooleanSupplier;
import java.util.function.Supplier;

@Slf4j
public class ItemServiceUtils {

    public static Response.Builder save(Runnable saveAction, String message) {
        Response.Builder response = Response.Builder.create();
        try {
            saveAction.run();
            response.setSuccess(message);
            log.info(message);
        } catch (Exception e) {
            response.setFailure("Failed to save item");
        }

        return response;
    }

    public static Response.Builder handleExistingItem(BooleanSupplier isSuccessfullyHandled, String message) {
        Response.Builder response = Response.Builder.create();

        if (isSuccessfullyHandled.getAsBoolean()) {
            log.info(message);
            response.setSuccess(message);
        } else {
            throw new IllegalStateException();
        }

        return response;
    }

    public static boolean handleTrashEmpty(
            Supplier<Integer> trashSize,
            Supplier<Integer> itemsRemoved,
            String item) {
        int itemsInTrash = trashSize.get();
        boolean isTrashEmpty = itemsInTrash > 0
                && itemsRemoved.get() == itemsInTrash;

        return isItemsRemoved(item, itemsInTrash, isTrashEmpty);
    }

    public static boolean handleTrashEmpty(
            int itemsInTrash,
            boolean isHistoryRemoved,
            Supplier<Integer> itemsRemoved,
            String item) {
        boolean isTrashEmpty = isHistoryRemoved
                && itemsInTrash > 0
                && itemsRemoved.get() == itemsInTrash;

        return isItemsRemoved(item, itemsInTrash, isTrashEmpty);
    }

    private static boolean isItemsRemoved(String item, int itemsInTrash, boolean isTrashEmpty) {
        boolean isRemoved = false;
        if (isTrashEmpty) {
            isRemoved = true;
            log.info("All {} removed from trash", item);
        } else if (itemsInTrash == 0) {
            isRemoved = true;
            log.info("No {} found in trash", item);
        } else {
            log.warn("Failed to remove {} from trash", item);
        }

        return isRemoved;
    }
}
