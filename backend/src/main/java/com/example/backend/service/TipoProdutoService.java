package com.example.backend.service;

import com.example.backend.model.TipoProduto;
import com.example.backend.repository.TipoProdutoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TipoProdutoService {

    private final TipoProdutoRepository repository;

    public List<TipoProduto> findAll() {
        return repository.findAll();
    }

    public TipoProduto findById(long id) {
        return repository.findById(id).orElseThrow(() -> new IllegalStateException("Not found TipoProduto by ID: " + id));
    }

    public TipoProduto save(TipoProduto tipoProduto) {
        return repository.save(tipoProduto);
    }

    public TipoProduto update(long id, TipoProduto tipoProduto) {
        TipoProduto tipoProdutoAlterado = findById(id);

        tipoProdutoAlterado.setNome(tipoProduto.getNome());

        return repository.save(tipoProdutoAlterado);
    }

    public String delete(long id) {
        TipoProduto tipoProduto = findById(id);
        repository.deleteById(id);
        return tipoProduto.getNome() + " was successfully removed";
    }
}
