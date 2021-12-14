import React from 'react';
import headerOptions from './headerOptions';


const Header = ({options}) => {
    return (
        <header className="bg-dark py-5 bg" style={{backgroundImage:'url(/img/bk_home.png)'}}>
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                       
                    </div>
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                    <div className="my-5 text-center text-xl-start">
                            <h1 className="display-3 fw-bolder text-white mb-2">{headerOptions[options].title}</h1>
                            <p className="lead fw-normal text-white-50 mb-4">{headerOptions[options].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
