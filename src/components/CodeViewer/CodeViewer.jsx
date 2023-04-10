import React from 'react'
import "./CodeViewer.css"
export default function CodeViewer({ img }) {
    return (
        <div className='code-viewer'>
            <img src={img} alt="img" />
        </div>
    )
}
