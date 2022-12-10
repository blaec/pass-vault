package com.blaec.passvault.controller;

import com.blaec.passvault.model.Folder;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.service.FolderService;
import com.sun.istack.NotNull;
import lombok.NonNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.mockStatic;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class FolderControllerTest extends AbstractControllerTest {
    @InjectMocks FolderController folderController;

    @Mock FolderService folderService;
    @Mock Folder folder;

    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(folderController).build();
    }

    @Test
    public void givenNone_whenGetAll_thenStatusIsOk() throws Exception {
        mockMvc.perform(get(FolderController.URL + "/get-all"))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    void givenFolderName_whenCreateNew_thenIsCreated() throws Exception {
        String name = "newFolder";
        try (MockedStatic<Folder> mockFolder = mockStatic(Folder.class)) {
            mockFolder.when(() -> Folder.from(name))
                    .thenReturn(folder);
            Mockito.when(folderService.create(folder))
                    .thenReturn(Response.Builder.create());

            mockMvc.perform(post(FolderController.URL + "/create/" + name))
                    .andDo(print())
                    .andExpect(status().isCreated())
                    .andExpect(jsonPath("$.*").isNotEmpty())
                    .andExpect(jsonPath("$.success").value(true));
        }
    }

    @Test
    void givenExistingFolder_whenUpdate_thenIsUpdated() throws Exception {
        record FolderTo(@NotNull int id, @NonNull String name) {}
        FolderTo folder = new FolderTo(1, "existingFolder");

        Mockito.when(folderService.update(any(Folder.class)))
                .thenReturn(Response.Builder.create().setSuccess("success"));

        mockMvc.perform(put(FolderController.URL + "/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(gson.toJson(folder))
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.*").isNotEmpty())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.message").value("success"));
    }

    @Test
    void givenFolderId_whenDelete_thenIsDeleted() throws Exception {
        Mockito.when(folderService.delete(anyInt()))
                .thenReturn(Response.Builder.create().setSuccess("success"));

        mockMvc.perform(delete(FolderController.URL + "/delete/" + 1))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.*").isNotEmpty())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.message").value("success"));
    }


//    @Autowired private FolderService folderService;
//
//    @Test
//    @Order(10)
//    public void contextLoads() {
//        assertThat(folderService).isNotNull();
//    }
//
//    @Test
//    @Order(20)
//    void getAll() throws Exception {
//        final String url = String.format("%s/get-all", FolderController.URL);
//
////        TestMatcher matcher = getTestMatcher();
//        ResultActions resultActions = perform(MockMvcRequestBuilders.get(url));
//        validate(resultActions)
//                .andExpect(jsonPath("$.*").isNotEmpty())
////                .andExpect(matcher.containsAll(MOVIES))
//        ;
//    }
//
//    @Test
//    @Order(50)
//    void saveFolder() throws Exception {
//        final String url = String.format("%s/create/%s", FolderController.URL, "test");
//
//        ResultActions resultActions = perform(MockMvcRequestBuilders.post(url));
//        validate(resultActions)
//                .andExpect(jsonPath("$.*").isNotEmpty())
//                .andExpect(jsonPath("$.message").value("success"))
//                .andExpect(jsonPath("$.success").value(true));
//    }
}
