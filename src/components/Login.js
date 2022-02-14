import React from 'react'
import { LoginForm } from './LoginForm'
import { NavbarTop } from './NavbarTop';
import { NavbarBot } from './NavbarBot';



export const Login = () => {
    return (
        <>
        <NavbarTop />
        <NavbarBot />
        <section className="loginpage">
            <div className='main-login'>
            <div className="container col-xl-9 col-xxl-8 px-5 py-5">
                <div className="align-items-center g-lg-5 py-5">
                    <LoginForm/>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
