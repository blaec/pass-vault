package com.blaec.passvault;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan("com.blaec.passvault.configs")
public class PassVaultApplication {

    public static void main(String[] args) {
        SpringApplication.run(PassVaultApplication.class, args);
    }

}
