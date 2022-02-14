import React from 'react'
import { LoginForm } from './LoginForm'
import { NavbarBot } from '../Navbar/NavbarBot'
import { NavbarTop } from '../Navbar/NavbarTop'




export const Login = () => {
    return (
        <>
        <NavbarTop/>
        <section className="loginpage">
            <div className='main-login'>
            <div className="container col-xl-9 col-xxl-8 px-5 py-5">
                <div className="align-items-center g-lg-5 py-5">
                    <LoginForm/>
                </div>
            </div>
            </div>
        </section>
        <NavbarBot/>
        </>
    )
}
