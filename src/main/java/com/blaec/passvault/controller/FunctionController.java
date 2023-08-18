package com.blaec.passvault.controller;

import com.blaec.passvault.service.FunctionService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.blaec.passvault.controller.AbstractController.API_VERSION;

@Slf4j
@AllArgsConstructor
@RequestMapping(FunctionController.URL)
@CrossOrigin(origins = "*")
@RestController
public class FunctionController {
    static final String URL = API_VERSION + "/settings";
    private final FunctionService functionService;

    @GetMapping("/is-prod")
    public boolean isProd() {
        return functionService.isProd();
    }
}
