import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TableBody({ tableBody }) {
    return (
        <tbody>
            {
                tableBody.map((item) => {
                    return (
                        <tr key={uuidv4()}>
                            {
                                Object.values(item).map((ceil) => {
                                    return (
                                        <td key={uuidv4()}>
                                            {ceil}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    )
}