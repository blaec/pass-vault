package com.blaec.passvault.service;

import com.blaec.passvault.enums.HealthType;
import com.blaec.passvault.model.to.item.BaseItemTo;

import java.util.Map;

public interface PasswordService {
    Map<HealthType, Iterable<BaseItemTo>> getAllHealthPasswords();
}
