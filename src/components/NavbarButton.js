import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export const NavbarButton = () => {
    return (
        
        <div className="d-none d-lg-block navbar-nav">
            <Link to="/masuk"><button type="button" className="button-primary rounded-3 mx-1"
                id="button-font"><span>Masuk</span></button></Link>
            <button type="button" className="button-secondary rounded-3 mx-1"
                id="button-font"><span>Daftar</span></button>
        </div>
        
    )
}
