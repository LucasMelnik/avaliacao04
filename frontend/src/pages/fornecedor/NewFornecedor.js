import React, { useState } from "react";
import api from '../../api/index'

export default function NewFornecedor() {
    const [fornecedor, setFornecedor] = useState({})

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
        api.post('/fornecedor', fornecedor)
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

            <button type="submit">Enviar</button>
        </form>
    )
}