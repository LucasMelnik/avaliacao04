package com.example.backend.repository;

import com.example.backend.model.TipoProduto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoProdutoRepository extends JpaRepository<TipoProduto, Long> {
}
