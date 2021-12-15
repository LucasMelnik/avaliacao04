import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

export default function TipoProduto() {
    const [tipoProdutos, setTipoProdutos] = useState([])

    async function handleRender() {
        const response = await api.get('/tipoproduto')

        setTipoProdutos(response.data)
    }

    useEffect(() => {
        handleRender()
    }, [])

    return(
        <div>
            <Link to="/tipo-produto/new">+</Link>

            <table>
                <thead>
                    <tr>
                        <th style={{ border: "solid 1px"}}>ID</th>
                        <th style={{ border: "solid 1px"}}>Nome</th>
                        <th style={{ border: "solid 1px"}}>Ação</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tipoProdutos.map((tipoProduto) => (
                        <tr>
                            <td style={{ border: "solid 1px"}}>{tipoProduto.id}</td>
                            <td style={{ border: "solid 1px"}}>{tipoProduto.nome}</td>
                            <td style={{ border: "solid 1px"}}><Link to={`/tipo-produto/editar/${tipoProduto.id}`}>Editar</Link></td>
                        </tr>
                    ))
                    
                }
                </tbody>
            </table>
        </div>

    )
}