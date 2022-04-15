import React from 'react'

export const DaftarForm = () => {
  return (
    <>
     <div className='split-screen'>
       <div className='left'>
         <section className='copy'>
         <img src='../img/Logo-Sentra.png' alt="Sentra Medan Jaya" className='img-fluid' width='200px'/>
           <p>PT Sentra Medan Jaya</p>
         </section>
       </div>
       <div className='right'>
       <form className="p-4 p-md-8 rounded-3">
       <p className='judul-daftar'>Daftar</p>
                <div className="form-floating mb-3">
                
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label>Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label>Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Daftar</button>
                <label className="akun">Sudah mempunyai akun? <strong>Login</strong></label>
            </form>
       </div>
     </div>


    </>
  )
}
