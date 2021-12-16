import React, { useEffect, useState } from "react";
import api from '../../api/index'

export default function NewProduto() {
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
        api.post('/produto', {
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

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input id="nome" type="text" value={produto.nome} onChange={handleChangeNome}/>
            </div>
            <div>
                <label>Tipo de Produto</label>
                <input id="tipoProduto" type="number" value={produto.tipoProduto} onChange={handleChangeTipoProduto}/>
            </div>
            <div>
                <label>Fornecedor</label>
                <input id="fornecedor" type="number" value={produto.fornecedor} onChange={handleChangeFornecedor}/>
            </div>
            <div>
                <label>Estoque</label>
                <input id="estoque" type="number" value={produto.estoque} onChange={handleChangeEstoque}/>
            </div>
            <div>
                <label>Custo</label>
                <input id="custo" type="number" value={produto.valorCusto} onChange={handleChangeCusto}/>
            </div>
            <div>
                <label>Venda</label>
                <input id="venda" type="number" value={produto.valorVenda} onChange={handleChangeVenda}/>
            </div>
            <button id="submit" type="submit">Enviar</button>
        </form>  
    )
}