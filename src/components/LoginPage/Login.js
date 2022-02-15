import React from 'react'
import { LoginForm } from './LoginForm'
import { NavbarBot } from '../Navbar/NavbarBot'
import { NavbarTop } from '../Navbar/NavbarTop'




export const Login = () => {
    return (
        <>
        
        <section className="loginpage">
        <NavbarTop/>
            <div className='main-login'>
                
                <LoginForm/>
    
            </div>
            <NavbarBot/>
        </section>
        
        </>
    )
}
