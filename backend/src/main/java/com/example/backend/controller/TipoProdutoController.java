package com.example.backend.controller;

import com.example.backend.model.TipoProduto;
import com.example.backend.service.TipoProdutoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tipoproduto")
@RequiredArgsConstructor
public class TipoProdutoController {

    private final TipoProdutoService service;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<TipoProduto> index() {
        return service.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TipoProduto create(@RequestBody TipoProduto tipoProduto) {
        return service.save(tipoProduto);
    }

    @GetMapping(path = {"/{id}"})
    @ResponseStatus(HttpStatus.FOUND)
    public TipoProduto findById(@PathVariable long id) {
        return service.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    @ResponseStatus(HttpStatus.OK)
    public TipoProduto update(@PathVariable long id, @RequestBody TipoProduto tipoProduto) {
        return service.update(id, tipoProduto);
    }

    @DeleteMapping(path = {"/{id}"})
    @ResponseStatus(HttpStatus.OK)
    public String delete(@PathVariable long id) {
        return service.delete(id);
    }

}
