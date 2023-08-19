package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.repository.FunctionRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Slf4j
@AllArgsConstructor
@Repository
public class FunctionRepositoryImpl implements FunctionRepository {
    private final JdbcTemplate jdbcTemplate;

    @Override
    public boolean isProd() {
        Boolean result = jdbcTemplate.queryForObject("SELECT is_prod()", Boolean.class);
        return result != null && result;
    }
}
