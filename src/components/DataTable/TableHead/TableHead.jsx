import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TableHead({ tableHead }) {
    return (
        <thead>
            <tr>
                {
                    tableHead?.map((item) => {
                        return (
                            <th key={uuidv4()}>
                                {item}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}