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
                <input id="nome" type="text" value={fornecedor.nome} onChange={handleChangeNome}/>
            </div>
            <div>
                <label>Telefone</label>
                <input id="telefone" type="text" value={fornecedor.telefone} onChange={handleChangeTelefone}/>
            </div>
            <div>
                <label>Email</label>
                <input id="email" type="text" value={fornecedor.email} onChange={handleChangeEmail}/>
            </div>

            <button id="submit" type="submit">Enviar</button>
        </form>
    )
}