import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

export default function Produto() {
    const [produtos, setProdutos] = useState([])

    async function handleRender() {
        const response = await api.get('/produto')

        setProdutos(response.data)
    }

    useEffect(() => {
        handleRender()
    }, [])

    return(
        <div>
            <Link to="/produto/new">+</Link>

            <table>
                <thead>
                    <tr>
                        <th style={{ border: "solid 1px"}}>ID</th>
                        <th style={{ border: "solid 1px"}}>Nome</th>
                        <th style={{ border: "solid 1px"}}>Tipo de Produto</th>
                        <th style={{ border: "solid 1px"}}>Fornecedor</th>
                        <th style={{ border: "solid 1px"}}>Estoque</th>
                        <th style={{ border: "solid 1px"}}>Custo</th>
                        <th style={{ border: "solid 1px"}}>Venda</th>
                        <th style={{ border: "solid 1px"}}>Ação</th>
                    </tr>
                </thead>
                <tbody>
                {
                    produtos.map((produto) => (
                        <tr>
                            <td style={{ border: "solid 1px"}}>{produto.id}</td>
                            <td style={{ border: "solid 1px"}}>{produto.nome}</td>
                            <td style={{ border: "solid 1px"}}>{produto.tipoProduto}</td>
                            <td style={{ border: "solid 1px"}}>{produto.fornecedor}</td>
                            <td style={{ border: "solid 1px"}}>{produto.estoque}</td>
                            <td style={{ border: "solid 1px"}}>{produto.valorCusto}</td>
                            <td style={{ border: "solid 1px"}}>{produto.valorVenda}</td>
                            <td style={{ border: "solid 1px"}}><Link to={`/produto/editar/${produto.id}`}>Editar</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    )
}