package com.blaec.passvault.configs;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@Data
@ConfigurationProperties(prefix = "encrypt")
@ConstructorBinding
public class Encrypt {
    private String password;
    private String salt;
}
