import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <nav>
            <Link to="/tipo-produto">Tipo de Produto  </Link>
            <Link to="/fornecedor">Fornecedor  </Link>
            <Link to="/produto">Produto</Link>
        </nav>
    )
}