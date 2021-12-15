import React from 'react'
import { Routes as Switch, Route} from 'react-router-dom'

import Fornecedor from './pages/fornecedor'
import EditFornecedor from './pages/fornecedor/EditFornecedor'
import NewFornecedor from './pages/fornecedor/NewFornecedor'
import Produto from './pages/Produto'
import NewProduto from './pages/Produto/NewProduto'
import TipoProduto from './pages/tipoProduto'
import EditTipoProduto from './pages/tipoProduto/EditTipoproduto'
import NewTipoProduto from './pages/tipoProduto/NewTipoProduto'


export default function Routes() {
    return(
        <Switch>
            <Route path="/tipo-produto" element={<TipoProduto/>} />
            <Route path="/tipo-produto/new" element={<NewTipoProduto/>} />
            <Route path="/tipo-produto/editar/:id" element={<EditTipoProduto/>} />
            <Route path="/fornecedor" element={<Fornecedor/>} />
            <Route path="/fornecedor/new" element={<NewFornecedor/>} />
            <Route path="/fornecedor/editar/:id" element={<EditFornecedor/>} />
            <Route path="/produto" element={<Produto/>} />
            <Route path="/produto/new" element={<NewProduto/>} />
        </Switch>
    )
}
