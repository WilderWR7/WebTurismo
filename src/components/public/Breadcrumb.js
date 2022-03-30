import React from 'react'
import { Link } from 'react-router-dom'

export const Breadcrumb = ({type}) => {
  return (
    <div className="breadcrumb-nav">
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to='/'>Turismo</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{type}</li>
                </ol>
            </nav>
        </div>
    </div>
  )
}
