import React from 'react';

function TableRow(props) {
    return (
    <tr>
        <td>
        <img src = {props.picture} alt ="pic" ></img>
        </td>
        <td>{props.firstname}</td>
        <td>{props.lastname}</td>
        <td>{props.gender}</td>
        <td>{props.location}</td>
        <td>{props.email}</td>
    </tr>
    
    )
}

export default TableRow;