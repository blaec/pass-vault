package com.blaec.passvault.utils;

import com.blaec.passvault.enums.ItemType;
import lombok.experimental.UtilityClass;

@UtilityClass
public class IdUtils {
    public static String fromModel(ItemType type, Integer id) {
        return String.format("%s-%d", type, id);
    }

    public static Integer toModel(String id) {
        return id == null
                ? null
                : Integer.valueOf(id.split("-")[1]);
    }
}
