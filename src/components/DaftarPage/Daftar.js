import React from 'react'
import { DaftarForm } from './DaftarForm'
import { NavbarBot } from '../Navbar/NavbarBot'
import { NavbarTop } from '../Navbar/NavbarTop'

export const Daftar = () => {
  return (
    <>
    <section className="loginpage">
        <NavbarTop/>
            <div className='main-login'>
                
                <DaftarForm/>
    
            </div>
            <NavbarBot/>
        </section>
    </>
  )
}
