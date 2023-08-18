package com.blaec.passvault.service.implementation;

import com.blaec.passvault.repository.FunctionRepository;
import com.blaec.passvault.service.FunctionService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class FunctionServiceImpl implements FunctionService{
    private final FunctionRepository functionRepository;

    @Override
    public boolean isProd() {
        return functionRepository.isProd();
    }
}
