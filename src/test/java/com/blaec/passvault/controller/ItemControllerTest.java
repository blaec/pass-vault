package com.blaec.passvault.controller;

import com.blaec.passvault.enums.ItemType;
import com.blaec.passvault.model.CreditCard;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.SecureNote;
import com.blaec.passvault.model.response.Response;
import com.blaec.passvault.model.to.item.FullItemTo;
import com.blaec.passvault.service.ItemService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.HashMap;
import java.util.Iterator;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class ItemControllerTest extends AbstractControllerTest {
    @Spy
    @InjectMocks
    ItemController itemController;

    @Mock
    ItemService<Password> passwordService;

    @Mock
    ItemService<SecureNote> secureNoteService;

    @Mock
    ItemService<CreditCard> creditCardService;

    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(itemController).build();
    }

    @Test
    @SuppressWarnings("unchecked")
    void givenNone_whenGetAllActive_thenReturnOk() throws Exception {
        when(passwordService.getAllActive())
                .thenReturn(() -> mock(Iterator.class));
        when(secureNoteService.getAllActive())
                .thenReturn(() -> mock(Iterator.class));
        when(creditCardService.getAllActive())
                .thenReturn(() -> mock(Iterator.class));

        mockMvc.perform(get(ItemController.URL + "/get-all-active"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.passwords", Matchers.empty()))
                .andExpect(jsonPath("$.secureNotes", Matchers.empty()))
                .andExpect(jsonPath("$.creditCards", Matchers.empty()));
    }

    @Test
    @SuppressWarnings("unchecked")
    void givenNone_whenGetAllDeleted_thenReturnOk() throws Exception {
        when(passwordService.getAllDeleted())
                .thenReturn(() -> mock(Iterator.class));
        when(secureNoteService.getAllDeleted())
                .thenReturn(() -> mock(Iterator.class));
        when(creditCardService.getAllDeleted())
                .thenReturn(() -> mock(Iterator.class));

        mockMvc.perform(get(ItemController.URL + "/get-all-deleted"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.passwords", Matchers.empty()))
                .andExpect(jsonPath("$.secureNotes", Matchers.empty()))
                .andExpect(jsonPath("$.creditCards", Matchers.empty()));
    }

    @Test
    @SuppressWarnings("unchecked")
    void givenFolderId_whenGetAllInFolder_thenReturnOk() throws Exception {
        int folderId = 1;
        when(passwordService.getAllByFolderId(folderId))
                .thenReturn(() -> mock(Iterator.class));
        when(secureNoteService.getAllByFolderId(folderId))
                .thenReturn(() -> mock(Iterator.class));
        when(creditCardService.getAllByFolderId(folderId))
                .thenReturn(() -> mock(Iterator.class));

        mockMvc.perform(get(ItemController.URL + "/get-all-in-folder/" + folderId))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.passwords", Matchers.empty()))
                .andExpect(jsonPath("$.secureNotes", Matchers.empty()))
                .andExpect(jsonPath("$.creditCards", Matchers.empty()));
    }

    @Test
    @SuppressWarnings("unchecked")
    void givenNone_whenGetAllHealthItems_thenReturnOk() throws Exception {
        when(passwordService.getAllHealthPasswords())
                .thenReturn(mock(HashMap.class));

        mockMvc.perform(get(ItemController.URL + "/get-all-health-items"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string("{}"));
    }

    @Test
    void givenPasswordTo_whenSaveItem_thenCreateNew() throws Exception {
        doReturn(passwordService)
                .when(itemController).serviceFactory(any(ItemType.class));
        Response.Builder response = mock(Response.Builder.class, RETURNS_DEEP_STUBS);
        doReturn(response)
                .when(passwordService).create(any(FullItemTo.class));
        doReturn(Response.Builder.create().build())
                .when(response).build();

        record PasswordTo(String itemType, String user, String password, String website) { }
        PasswordTo passwordTo = new PasswordTo("passwords", "user", "pass", "www.site.com");

        mockMvc.perform(post(ItemController.URL + "/create/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(gson.toJson(passwordTo))
                )
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.*").isNotEmpty())
                .andExpect(jsonPath("$.success").value(true));
    }

    @Test
    void givenPasswordTo_whenUpdateItem_thenCreateNew() throws Exception {
        doReturn(passwordService)
                .when(itemController).serviceFactory(any(ItemType.class));
        Response.Builder response = mock(Response.Builder.class, RETURNS_DEEP_STUBS);
        doReturn(response)
                .when(passwordService).update(any(FullItemTo.class));
        doReturn(Response.Builder.create().build())
                .when(response).build();

        record PasswordTo(String itemType, String user, String password, String website) { }
        PasswordTo passwordTo = new PasswordTo("passwords", "user", "pass", "www.site.com");

        mockMvc.perform(put(ItemController.URL + "/update/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(gson.toJson(passwordTo))
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.*").isNotEmpty())
                .andExpect(jsonPath("$.success").value(true));
    }

    @Test
    void restore() throws Exception {
    }

    @Test
    void moveToTrash() throws Exception {
    }

    @Test
    void delete() throws Exception {
    }

    @Test
    void emptyTrash() throws Exception {
    }
}