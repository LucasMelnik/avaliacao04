import React, { useState } from "react";
import api from '../../api/index'

export default function NewTipoProduto() {
    const [tipoProduto, setTipoProduto] = useState({})

    function handleChangeNome(props) {
        setTipoProduto({...tipoProduto,
            nome: props.target.value
        })
    } 

    function handleSubmit(event) {
        api.post('/tipoproduto', tipoProduto)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input id="nome" type="text" value={tipoProduto.nome} onChange={handleChangeNome}/>
            </div>
            <button id="submit" type="submit">Enviar</button>
        </form>
    )
}