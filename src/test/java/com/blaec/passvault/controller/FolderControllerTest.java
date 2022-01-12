package com.blaec.passvault.controller;

import com.blaec.passvault.service.FolderService;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

public class FolderControllerTest extends AbstractControllerTest {
    @Autowired private FolderService folderService;

    @Test
    @Order(10)
    public void contextLoads() {
        assertThat(folderService).isNotNull();
    }

    @Test
    @Order(20)
    void getAll() throws Exception {
        final String url = String.format("%s/get-all", FolderController.URL);

//        TestMatcher matcher = getTestMatcher();
        ResultActions resultActions = perform(MockMvcRequestBuilders.get(url));
        validate(resultActions)
                .andExpect(jsonPath("$.*").isNotEmpty())
//                .andExpect(matcher.containsAll(MOVIES))
        ;
    }

    @Test
    @Order(50)
    void saveFolder() throws Exception {
        final String url = String.format("%s/create/%s", FolderController.URL, "test");

        ResultActions resultActions = perform(MockMvcRequestBuilders.post(url));
        validate(resultActions)
                .andExpect(jsonPath("$.*").isNotEmpty())
                .andExpect(jsonPath("$.message").value("success"))
                .andExpect(jsonPath("$.success").value(true));
    }
}
