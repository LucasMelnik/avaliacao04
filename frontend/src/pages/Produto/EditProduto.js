import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from '../../api/index'

export default function EditProduto() {
    const { id } = useParams()
    const ProdutoId = Number.parseInt(id, 10)

    const [produto, setProduto] = useState({ })

    function handleChangeNome(props) {
        setProduto({...produto,
            nome: props.target.value
        })
    }

    function handleChangeTipoProduto(props) {
        setProduto({...produto,
            tipoProduto: props.target.value
        })
    }

    function handleChangeFornecedor(props) {
        setProduto({...produto,
            fornecedor: props.target.value
        })
    }

    function handleChangeEstoque(props) {
        setProduto({...produto,
            estoque: Number.parseInt(props.target.value, 10)
        })
    }

    function handleChangeCusto(props) {
        setProduto({...produto,
            valorCusto: Number.parseFloat(props.target.value)
        })
    }

    function handleChangeVenda(props) {
        setProduto({...produto,
            valorVenda: Number.parseFloat(props.target.value)
        })
    }
    
    function handleSubmit(event) {
        api.put(`/produto/${ProdutoId}`, {
            nome: produto.nome,
            tipoProduto: {
                id: produto.tipoProduto
            },
            fornecedor: {
                id: produto.fornecedor
            },
            estoque: produto.estoque,
            valorCusto: produto.valorCusto,
            valorVenda: produto.valorVenda,
        })

        event.preventDefault()
    }

    function handleDelete() {
        api.delete(`/produto/${ProdutoId}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input type="text" value={produto.nome} onChange={handleChangeNome}/>
            </div>
            <div>
                <label>Tipo de Produto</label>
                <input type="number" value={produto.tipoProduto} onChange={handleChangeTipoProduto}/>
            </div>
            <div>
                <label>Fornecedor</label>
                <input type="number" value={produto.fornecedor} onChange={handleChangeFornecedor}/>
            </div>
            <div>
                <label>Estoque</label>
                <input type="number" value={produto.estoque} onChange={handleChangeEstoque}/>
            </div>
            <div>
                <label>Custo</label>
                <input type="number" value={produto.valorCusto} onChange={handleChangeCusto}/>
            </div>
            <div>
                <label>Venda</label>
                <input type="number" value={produto.valorVenda} onChange={handleChangeVenda}/>
            </div>
            <button type="submit">Editar</button>
            <button onClick={handleDelete}>Excluir</button>
        </form>  
    )
}