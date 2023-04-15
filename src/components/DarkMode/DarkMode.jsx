import React from 'react'
import { ReactComponent as LightIcon } from "../../assets/svgs/light.svg";
import { ReactComponent as DarkIcon } from "../../assets/svgs/dark.svg";
import './DarkMode.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function DarkMode() {
    const [toggle, setToggle] = useState(localStorage.getItem('toggle') === 'true' ? true : false || false)
    localStorage.setItem('toggle', toggle)

    useEffect(() => {
        if (toggle) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [toggle])

    return (
        <button className="toggle-mode" onClick={() => { setToggle(!toggle); document.body.classList.toggle('dark-mode') }}>
            {toggle ? <DarkIcon /> : <LightIcon />}
        </button>
    )
}
