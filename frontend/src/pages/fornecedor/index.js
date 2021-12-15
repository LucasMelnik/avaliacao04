import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

export default function Fornecedor() {
    const [fornecedores, setFornecedores] = useState([])

    async function handleRender() {
        const response = await api.get('/fornecedor')

        setFornecedores(response.data)
    }

    useEffect(() => {
        handleRender()
    }, [])

    return(
        <div>
            <Link to="/fornecedor/new">+</Link>

            <table>
                <thead>
                    <tr>
                        <th style={{ border: "solid 1px"}}>ID</th>
                        <th style={{ border: "solid 1px"}}>Nome</th>
                        <th style={{ border: "solid 1px"}}>Telefone</th>
                        <th style={{ border: "solid 1px"}}>Email</th>
                        <th style={{ border: "solid 1px"}}>Ação</th>
                    </tr>
                </thead>
                <tbody>
                {
                    fornecedores.map((fornecedor) => (
                        <tr>
                            <td style={{ border: "solid 1px"}}>{fornecedor.id}</td>
                            <td style={{ border: "solid 1px"}}>{fornecedor.nome}</td>
                            <td style={{ border: "solid 1px"}}>{fornecedor.telefone}</td>
                            <td style={{ border: "solid 1px"}}>{fornecedor.email}</td>
                            <td style={{ border: "solid 1px"}}><Link to={`/fornecedor/editar/${fornecedor.id}`}>Editar</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    )
}