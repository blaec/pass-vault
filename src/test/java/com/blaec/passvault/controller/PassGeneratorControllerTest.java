package com.blaec.passvault.controller;

import com.blaec.passvault.enums.PasswordStrength;
import com.blaec.passvault.model.passGenerator.PasswordValidation;
import com.blaec.passvault.model.to.passgen.GeneratedPasswordTo;
import com.blaec.passvault.model.to.passgen.PasswordConfigTo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockedStatic;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.mockStatic;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class PassGeneratorControllerTest extends AbstractControllerTest {
    @InjectMocks PassGeneratorController passGeneratorController;

    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(passGeneratorController).build();
    }

    @Test
    void givenPasswordString_whenGetStrength_thenReturnPasswordStrength() throws Exception {
        PasswordStrength result = PasswordStrength.weak;
        PassGeneratorController.PasswordStringTo to = new PassGeneratorController.PasswordStringTo("weak");

        try (MockedStatic<PasswordValidation> mockPasswordValidation = mockStatic(PasswordValidation.class)) {
            mockPasswordValidation.when(() -> PasswordValidation.getPasswordStrength(to.password()))
                    .thenReturn(result);

            mockMvc.perform(post(PassGeneratorController.URL + "/get-strength")
                            .contentType(MediaType.APPLICATION_JSON)
                            .accept(MediaType.APPLICATION_JSON)
                            .characterEncoding("UTF-8")
                            .content(gson.toJson(to))
                    )
                    .andDo(print())
                    .andExpect(status().isOk())
                    .andExpect(content().string(String.valueOf(result.ordinal())));
        }
    }

    @Test
    void givenPasswordConfig_whenCreatePassword_thenReturnCreatedPassword() throws Exception {
        PasswordConfigTo passConfig = new PasswordConfigTo(8, true, true, true);
        GeneratedPasswordTo result = GeneratedPasswordTo.create(passConfig);

        try (MockedStatic<GeneratedPasswordTo> mockGeneratedPasswordTo = mockStatic(GeneratedPasswordTo.class)) {
            mockGeneratedPasswordTo.when(() -> GeneratedPasswordTo.create(passConfig))
                    .thenReturn(result);

            mockMvc.perform(post(PassGeneratorController.URL + "/create")
                            .contentType(MediaType.APPLICATION_JSON)
                            .accept(MediaType.APPLICATION_JSON)
                            .characterEncoding("UTF-8")
                            .content(gson.toJson(passConfig))
                    )
                    .andDo(print())
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.*").isNotEmpty())
                    .andExpect(jsonPath("$.password").value(result.getPassword()))
                    .andExpect(jsonPath("$.strength").value(result.getStrength()));
        }
    }
}