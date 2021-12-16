package com.example.backend;

import com.example.backend.model.Fornecedor;
import com.example.backend.model.Produto;
import com.example.backend.model.TipoProduto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class ProdutoTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;


    String url = "/produto";

    private MvcResult createTipoproduto() throws Exception{

        TipoProduto tipoProduto = TipoProduto.builder()
                .nome("teste")
                .build();

        String content = objectMapper.writeValueAsString(tipoProduto);
        String tipoProdutoUrl = "/tipoproduto";

        return mockMvc.perform(
                MockMvcRequestBuilders.post(tipoProdutoUrl)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        ).andReturn();
    }

    private MvcResult createFornecedor() throws Exception{

        Fornecedor fornecedor = Fornecedor.builder()
                .nome("teste")
                .telefone("teste")
                .email("teste")
                .build();

        String content = objectMapper.writeValueAsString(fornecedor);
        String fornecedorUrl = "/fornecedor";

        return mockMvc.perform(
                MockMvcRequestBuilders.post(fornecedorUrl)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        ).andReturn();
    }

    @Test
    void shouldCreateProduto() throws Exception {
        MvcResult mvcResultTipoProduto = createTipoproduto();
        MvcResult mvcResultFornecedor = createFornecedor();

        TipoProduto tipoProduto = objectMapper.readValue(mvcResultTipoProduto.getResponse().getContentAsByteArray(), TipoProduto.class);
        Fornecedor fornecedor = objectMapper.readValue(mvcResultFornecedor.getResponse().getContentAsByteArray(), Fornecedor.class);

        Produto produto = Produto.builder()
                .nome("teste")
                .tipoProduto(tipoProduto)
                .fornecedor(fornecedor)
                .estoque(1L)
                .valorCusto(4.0F)
                .valorVenda(8.0F)
                .build();

        String content = objectMapper.writeValueAsString(produto);

        mockMvc.perform(
                MockMvcRequestBuilders.post(url)
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(MockMvcResultMatchers.status().isCreated());
        Assertions.assertEquals(produto.getTipoProduto(), tipoProduto);
        Assertions.assertEquals(produto.getFornecedor(), fornecedor);

    }
}
