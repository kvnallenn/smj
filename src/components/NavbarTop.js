import React from 'react'
import { NavbarButton } from './NavbarButton'
import { Link } from 'react-router-dom'

export const NavbarTop = () => {
    return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" id="navbaratas">
            <div className="container">
                <Link to="/"><a className="navbar-brand" href="#"><img src="img/Logo-Sentra.png" alt="Logo Sentra" width="100" /></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-2">
                            <Link to="/"><a className="nav-link active" id="nav-warna" aria-current="page" href="#">Beranda</a>
                            </Link></li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" id="nav-warna" href="#">Tentang</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" id="nav-warna" href="#">Kontak</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" id="nav-warna" href="#">Produk</a>
                        </li>
                    </ul>
                    <NavbarButton />
                </div>
            </div>
        </nav>

    )
}
