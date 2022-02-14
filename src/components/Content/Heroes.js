import React from 'react'
export const Heroes = () => {
  return (
    <>
      <section>
        <div className="heroes">
          <div className="main">
            <div className="text-center">
              <img className="d-block mx-auto mb-4" src="img/Logo-Sentra.png" alt="" width="195" height="110" />
              <h1 className="display-5 fw-bold">PT SENTRA MEDAN JAYA</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button type="button" id="button-font" className="button-hero btn-lg px-4 gap-3">Lebih
                    Lanjut</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="img/banner1.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Lorem ipsum dolor sit amet</h1>
              <p className="lead1"> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
              </div>
            </div>
          </div>
          <div className="skew-c"></div>
        </div>
      </section>
      <section className="warnabawah">
        <div className="container col-xxl-8 px-4 py-5 warna">
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="img/banner3.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 warna">Lorem ipsum dolor sit amet</h1>
              <p className="lead2"> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
