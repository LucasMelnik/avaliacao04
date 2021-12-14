package com.example.backend.controller;

import com.example.backend.model.Produto;
import com.example.backend.service.ProdutoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
@RequiredArgsConstructor
public class ProdutoController {

    private final ProdutoService service;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Produto> index() {
        return service.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Produto create(@RequestBody Produto produto) {
        return service.save(produto);
    }

    @GetMapping(path = {"/{id}"})
    @ResponseStatus(HttpStatus.FOUND)
    public Produto findById(@PathVariable long id) {
        return service.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    @ResponseStatus(HttpStatus.OK)
    public Produto update(@PathVariable long id, @RequestBody Produto produto) {
        return service.update(id, produto);
    }

    @DeleteMapping(path = {"/{id}"})
    @ResponseStatus(HttpStatus.OK)
    public String delete(@PathVariable long id) {
        return service.delete(id);
    }

}
