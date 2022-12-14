package com.blaec.passvault.controller;

import com.blaec.passvault.model.CreditCard;
import com.blaec.passvault.model.Password;
import com.blaec.passvault.model.SecureNote;
import com.blaec.passvault.service.ItemService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.HashMap;
import java.util.Iterator;

import static org.mockito.Mockito.mock;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class ItemControllerTest extends AbstractControllerTest {
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
        Mockito.when(passwordService.getAllActive())
                .thenReturn(() -> mock(Iterator.class));
        Mockito.when(secureNoteService.getAllActive())
                .thenReturn(() -> mock(Iterator.class));
        Mockito.when(creditCardService.getAllActive())
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
        Mockito.when(passwordService.getAllDeleted())
                .thenReturn(() -> mock(Iterator.class));
        Mockito.when(secureNoteService.getAllDeleted())
                .thenReturn(() -> mock(Iterator.class));
        Mockito.when(creditCardService.getAllDeleted())
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
    void getAllInFolder() throws Exception {
        int folderId = 1;
        Mockito.when(passwordService.getAllByFolderId(folderId))
                .thenReturn(() -> mock(Iterator.class));
        Mockito.when(secureNoteService.getAllByFolderId(folderId))
                .thenReturn(() -> mock(Iterator.class));
        Mockito.when(creditCardService.getAllByFolderId(folderId))
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
    void getAllHealthItems() throws Exception {
        Mockito.when(passwordService.getAllHealthPasswords())
                .thenReturn(mock(HashMap.class));

        mockMvc.perform(get(ItemController.URL + "/get-all-health-items"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string("{}"));
    }

    @Test
    void saveItem() throws Exception {
//        Mockito.when(serviceFactory(to.getItemType()))
    }

    @Test
    void updateItem() throws Exception {
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