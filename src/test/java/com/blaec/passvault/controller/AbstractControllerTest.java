package com.blaec.passvault.controller;

import com.google.gson.Gson;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

/**
 * Can't use application.yaml with test settings in resource folder -
 * because it's settings are overridden by same file from config folder
 */
//@TestPropertySource(
//        properties = {
//                "spring.datasource.url=jdbc:mysql://localhost:3306/dummy_movie_library?serverTimezone=UTC",
//        }
//)

//@SpringBootTest
//@Transactional
//@AutoConfigureMockMvc
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@ExtendWith({MockitoExtension.class})
@MockitoSettings(strictness = Strictness.LENIENT)
public class AbstractControllerTest {
    protected Gson gson = new Gson();

//    @Autowired
//    protected MockMvc mockMvc;
//
//    protected ResultActions perform(MockHttpServletRequestBuilder builder) throws Exception {
//        return mockMvc.perform(builder);
//    }
//
//    protected ResultActions validate(ResultActions resultActions) throws Exception {
//        return resultActions
//                .andExpect(status().isOk())
//                .andDo(print())
//                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON));
//    }
}
