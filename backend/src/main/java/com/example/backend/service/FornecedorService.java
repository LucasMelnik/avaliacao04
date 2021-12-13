package com.example.backend.service;

import com.example.backend.model.Fornecedor;
import com.example.backend.repository.FornecedorRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FornecedorService {

    private final FornecedorRepository repository;

    public List<Fornecedor> findAll() {
        return repository.findAll();
    }

    public Fornecedor findById(long id) {
        return repository.findById(id).orElseThrow(() -> new IllegalStateException("Not found Fornecedor by ID: " + id));
    }

    public Fornecedor save(Fornecedor fornecedor) {
        return repository.save(fornecedor);
    }

    public Fornecedor update(long id, Fornecedor fornecedor) {
        Fornecedor fornecedorAlterado = findById(id);

        fornecedorAlterado.setNome(fornecedor.getNome());

        return repository.save(fornecedorAlterado);
    }

    public String delete(long id) {
        Fornecedor fornecedor = findById(id);
        repository.deleteById(id);
        return fornecedor.getNome() + " was successfully removed";
    }
}
