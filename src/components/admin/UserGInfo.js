import React from 'react'

export const UserGInfo = ({name,correo,telfono}) => {
    return (
        <tr>
            <td style={{width:'50px'}}><span className="round"><img
                        src="../assets/images/users/1.jpg" alt="user"
                        width="50"/></span></td>
            <td>
                <h6>{name}</h6><small className="text-muted">abddefe</small>
            </td>
            <td>{correo}</td>
            <td>{telfono}</td>
            <td>
            <button className="btn btn-primary m-t-10 font-14">Cambiar</button>
            </td>
        </tr>
    )
}
