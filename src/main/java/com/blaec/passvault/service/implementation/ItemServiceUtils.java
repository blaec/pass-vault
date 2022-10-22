package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.response.Response;
import lombok.extern.slf4j.Slf4j;

import java.util.function.BooleanSupplier;

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
}
