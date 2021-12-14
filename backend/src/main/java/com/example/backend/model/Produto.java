package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    @ManyToOne
    private TipoProduto tipoProduto;
    @ManyToOne
    private Fornecedor fornecedor;
    private Long estoque;
    private Float valorCusto;
    private Float valorVenda;
}
