import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../../api/index'

export default function EditFornecedor() {
    const { id } = useParams();
    const forncedorId = Number.parseInt(id, 10)

    const [fornecedor, setFornecedor] = useState({ id: forncedorId })

    function handleChangeNome(props) {
        setFornecedor({...fornecedor,
            nome: props.target.value
        })
    } 
    
    function handleChangeTelefone(props) {
        setFornecedor({...fornecedor,
            telefone: props.target.value
        })
    } 
    
    function handleChangeEmail(props) {
        setFornecedor({...fornecedor,
            email: props.target.value
        })
    }

    function handleSubmit(event) {
        api.put(`/fornecedor/${forncedorId}`, fornecedor)

        event.preventDefault()
    }

    function handleDelete() {
        api.delete(`/fornecedor/${forncedorId}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input type="text" value={fornecedor.nome} onChange={handleChangeNome}/>
            </div>
            <div>
                <label>Telefone</label>
                <input type="text" value={fornecedor.telefone} onChange={handleChangeTelefone}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={fornecedor.email} onChange={handleChangeEmail}/>
            </div>

            <button type="submit">Editar</button>
            <button onClick={handleDelete}>Excluir</button>
        </form>
    )
}