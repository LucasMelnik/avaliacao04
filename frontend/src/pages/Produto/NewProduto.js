import React, { useEffect, useState } from "react";
import api from '../../api/index'

export default function NewProduto() {
    const [produto, setProduto] = useState({ })
    const [tipoProdutos, setTipoProdutos] = useState([])

    async function handleRender() {
        const response = await api.get('/tipoproduto')

        setTipoProdutos(response.data)
    }

    useEffect(() => {
        handleRender()
    }, [])

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

    // function handleChangeFornecedor(props) {
    //     setIdFornecedor(props.target.value)
    // }

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
        api.post('/produto', produto)

        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input type="text" value={produto.nome} onChange={handleChangeNome}/>
            </div>
            <div>
                <label>Tipo de Produto</label>
                <select name="select">
                    {
                        tipoProdutos.map((tipoProduto) => {
                            <option value={tipoProduto}>{tipoProduto.nome}</option>
                        })
                    }
                </select>
            </div>
            {/* <div>
                <label>Fornecedor</label>
                <input type="text" value={produto.fornecedor} onChange={handleChangeFornecedor}/>
            </div> */}
            <div>
                <label>Estoque</label>
                <input type="text" value={produto.estoque} onChange={handleChangeEstoque}/>
            </div>
            <div>
                <label>Custo</label>
                <input type="text" value={produto.valorCusto} onChange={handleChangeCusto}/>
            </div>
            <div>
                <label>Venda</label>
                <input type="text" value={produto.valorVenda} onChange={handleChangeVenda}/>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}