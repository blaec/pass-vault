package com.blaec.passvault.service;

import com.blaec.passvault.enums.HealthType;
import com.blaec.passvault.model.Password;

import java.util.Map;

public interface PasswordService {
    Map<HealthType, Iterable<Password>> getAllHealthPasswords();
}
