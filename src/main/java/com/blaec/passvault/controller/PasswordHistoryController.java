package com.blaec.passvault.controller;

import com.blaec.passvault.model.PasswordHistory;
import com.blaec.passvault.model.to.item.PasswordHistoryTo;
import com.blaec.passvault.service.PasswordHistoryService;
import com.blaec.passvault.utils.IdUtils;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static com.blaec.passvault.controller.AbstractController.API_VERSION;

@Slf4j
@AllArgsConstructor
@RequestMapping(PasswordHistoryController.URL)
@CrossOrigin(origins = "*")
@RestController
public class PasswordHistoryController {
    static final String URL = API_VERSION + "/password-history";
    private final PasswordHistoryService passwordHistoryService;

    @GetMapping("/get-all/{passwordId}")
    public Iterable<PasswordHistoryTo> getAllByPasswordId(@PathVariable String passwordId) {
        Iterable<PasswordHistory> passwordHistory = passwordHistoryService.getAllByPasswordId(IdUtils.toModel(passwordId));
        return StreamSupport.stream(passwordHistory.spliterator(), false)
                .map(PasswordHistoryTo::from)
                .collect(Collectors.toList());
    }
}
