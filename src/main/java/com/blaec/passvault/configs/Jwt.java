package com.blaec.passvault.configs;


import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@Data
@ConfigurationProperties(prefix = "jwt")
@ConstructorBinding
public class Jwt {
    private String secret;
    private String password;
}
