import React from 'react'
import { Routes as Switch, Route} from 'react-router-dom'

import Fornecedor from './pages/fornecedor'
import EditFornecedor from './pages/fornecedor/EditFornecedor'
import NewFornecedor from './pages/fornecedor/NewFornecedor'
import TipoProduto from './pages/tipoProduto'
import NewTipoProduto from './pages/tipoProduto/NewTipoProduto'


export default function Routes() {
    return(
        <Switch>
            <Route path="/tipo-produto" element={<TipoProduto/>} />
            <Route path="/tipo-produto/new" element={<NewTipoProduto/>} />
            <Route path="/fornecedor" element={<Fornecedor/>} />
            <Route path="/fornecedor/new" element={<NewFornecedor/>} />
            <Route path="/fornecedor/editar/:id" element={<EditFornecedor/>} />
        </Switch>
    )
}
