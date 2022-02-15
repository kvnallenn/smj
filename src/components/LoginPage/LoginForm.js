import React from 'react'

export const LoginForm = () => {
    return (
        <>
        
         <div className='container col-lg-4 px-5 py-5'>
            <div className='card-banner'><img src='../img/Logo-Sentra.png' alt="Sentra Medan Jaya" className='img-fluid' width='150px'></img></div>
            <form className="p-4 p-md-5 rounded-3">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label>Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label className="checkbox-label">
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                <hr className="my-4" />
                <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </form>
        
        </div>
        </>
    )
}
