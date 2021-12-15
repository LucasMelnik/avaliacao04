import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from '../../api/index'

export default function EditTipoProduto() {
    const { id } = useParams();
    const tipoProdutoId = Number.parseInt(id, 10)

    const [tipoProduto, setTipoProduto] = useState({ id: tipoProdutoId })

    function handleChangeNome(props) {
        setTipoProduto({...tipoProduto,
            nome: props.target.value
        })
    } 

    function handleSubmit(event) {
        api.put(`/tipoproduto/${tipoProdutoId}`, tipoProduto)

        event.preventDefault()
    }

    function handleDelete() {
        api.delete(`/tipoproduto/${tipoProdutoId}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input type="text" value={tipoProduto.nome} onChange={handleChangeNome}/>
            </div>

            <button type="submit">Editar</button>
            <button onClick={handleDelete}>Excluir</button>
        </form>
    )
}