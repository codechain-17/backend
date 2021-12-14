import React from 'react'

const SuscribeSection = () => {
    return (
        <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
            <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                <div className="mb-4 mb-xl-0">
                    <div className="fs-3 fw-bold text-white">Sólo empleos que valen la pena.</div>
                    <div className="text-white-50">Regístrate gratis y descubre empleos seleccionados para ti.</div>
                </div>
                <div className="ms-xl-4">
                    <div className="input-group mb-2">
                        <input className="form-control" type="text" placeholder="Dirección de email ..." aria-label="Email address..." aria-describedby="button-newsletter" />
                        <button className="btn btn-outline-light" id="button-newsletter" type="button">Enviar</button>
                    </div>
                    <div className="small text-white-50">Cuidamos tu privacidad y nunca compartimos tu información.</div>
                </div>
            </div>
        </aside>
    )
}

export default SuscribeSection
