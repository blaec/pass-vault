package com.blaec.passvault.service.implementation;

import com.blaec.passvault.model.response.Response;

import java.util.function.BooleanSupplier;
import java.util.function.Supplier;

public class ItemServiceUtils {

    public static Response.Builder save(Runnable saveAction) {
        Response.Builder response = Response.Builder.create();
        try {
            saveAction.run();
            response.setSuccess("success");
        } catch (Exception e) {
            response.setFailure("failure");
        }

        return response;
    }

    public static Response.Builder delete(BooleanSupplier isDeleted, Supplier<String> logSuccess) {
        Response.Builder response = Response.Builder.create();

        if (isDeleted.getAsBoolean()) {
            response.setSuccess(logSuccess.get());
        } else {
            throw new IllegalStateException();
        }

        return response;
    }
}
