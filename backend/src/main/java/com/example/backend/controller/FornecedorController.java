package com.example.backend.controller;

import com.example.backend.model.Fornecedor;
import com.example.backend.service.FornecedorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fornecedor")
@RequiredArgsConstructor
public class FornecedorController {

    private final FornecedorService service;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Fornecedor> index() {
        return service.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Fornecedor create(@RequestBody Fornecedor fornecedor) {
        return service.save(fornecedor);
    }

    @GetMapping(path = {"/{id}"})
    @ResponseStatus(HttpStatus.FOUND)
    public Fornecedor findById(@PathVariable long id) {
        return service.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    @ResponseStatus(HttpStatus.OK)
    public Fornecedor update(@PathVariable long id, @RequestBody Fornecedor fornecedor) {
        return service.update(id, fornecedor);
    }

    @DeleteMapping(path = {"/{id}"})
    @ResponseStatus(HttpStatus.OK)
    public String delete(@PathVariable long id) {
        return service.delete(id);
    }

}
