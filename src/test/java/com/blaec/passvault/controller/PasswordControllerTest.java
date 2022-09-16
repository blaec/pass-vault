package com.blaec.passvault.controller;

import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.to.password.PasswordTo;
import com.blaec.passvault.service.FolderService;
import com.blaec.passvault.service.ItemService;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

public class PasswordControllerTest extends AbstractControllerTest {
    @Autowired private FolderService folderService;
    @Autowired private ItemService<Password, PasswordTo> passwordService;

    @Test
    @Order(10)
    public void contextLoads() {
        assertThat(folderService).isNotNull();
        assertThat(passwordService).isNotNull();
    }

    @Test
    @Order(20)
    void getAll() throws Exception {
        final String url = String.format("%s/get-all", PasswordController.URL);

//        TestMatcher matcher = getTestMatcher();
        ResultActions resultActions = perform(MockMvcRequestBuilders.get(url));
        validate(resultActions)
                .andExpect(jsonPath("$.*").isNotEmpty())
//                .andExpect(matcher.containsAll(MOVIES))
        ;
    }

    @Test
    @Order(50)
    void savePassword() throws Exception {
        PasswordTo passwordTo = PasswordTo.create(null, 1, "title", "user", "password", "www.website.com", "", "10/10/2020");
        final String url = String.format("%s/create/%s", PasswordController.URL, passwordTo);

        ResultActions resultActions = perform(MockMvcRequestBuilders.post(url));
        validate(resultActions)
                .andExpect(jsonPath("$.*").isNotEmpty())
                .andExpect(jsonPath("$.message").value("success"))
                .andExpect(jsonPath("$.success").value(true));
    }
}
