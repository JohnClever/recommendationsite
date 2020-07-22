import React from 'react'
import { Link } from 'react-router-dom'

export default function Hamburger() {
    return (
        <Link to="/">
            <div className="icon">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Link>       
    )
}
