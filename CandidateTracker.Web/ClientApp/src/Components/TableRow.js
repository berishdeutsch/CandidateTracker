import React from "react";
import { Link } from 'react-router-dom';

const TableRow = ({ candidate, isPending }) => {
    const { id, firstName, lastName, email, phoneNumber, notes } = candidate;

    return (
        <tr>
           {isPending &&
                <td><Link to={`/pending/details/${id}`}>View Details </Link></td>}
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{notes}</td>
        </tr>
    )
}

export default TableRow;