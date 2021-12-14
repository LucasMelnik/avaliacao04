package com.example.backend.service;

import com.example.backend.model.Produto;
import com.example.backend.repository.ProdutoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProdutoService {

    private final ProdutoRepository repository;

    public List<Produto> findAll() {
        return repository.findAll();
    }

    public Produto findById(long id) {
        return repository.findById(id).orElseThrow(() -> new IllegalStateException("Not found Produto by ID: " + id));
    }

    public Produto save(Produto produto) {
        return repository.save(produto);
    }

    public Produto update(long id, Produto produto) {
        Produto produtoAlterado = findById(id);

        produtoAlterado.setNome(produto.getNome());
        produtoAlterado.setTipoProduto(produto.getTipoProduto());
        produtoAlterado.setFornecedor(produto.getFornecedor());
        produtoAlterado.setEstoque(produto.getEstoque());
        produtoAlterado.setValorCusto(produto.getValorCusto());
        produtoAlterado.setValorVenda(produto.getValorVenda());

        return repository.save(produtoAlterado);
    }

    public String delete(long id) {
        Produto produto = findById(id);
        repository.deleteById(id);
        return produto.getNome() + " was successfully removed";
    }
}
