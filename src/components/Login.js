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
            <div className='main'>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
                        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>
                    <LoginForm/>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
