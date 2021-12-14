import React from 'react'
import { Pill } from './Pill'

const FeaturesSection = () => {
    return (
        <section className="py-5" id="features">
            <div className="container px-5 my-5">
                <div className="row justify-content-evenly"> 
                        <div className="col-sm-12 col-md-6">
                            <div className="col-md-6 mb-5 mb-lg-0">
                                <h1 className="fw-bolder mb-0">Nuestras categorías más buscadas.</h1>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="row justify-content-center">
                                <div className="col-sm-12 col-md-4 mb-4">
                                    <Pill titulo="Frontend"/>
                                </div>
                                <div className="col-sm-12 col-md-4 mb-4">
                                    <Pill titulo="Backend"/>
                                </div>
                                <div className="col-sm-12 col-md-4 mb-4">
                                    <Pill titulo="React Js"/>
                                </div>
                                <div className="col-sm-12 col-md-4 mb-4">
                                    <Pill titulo="Python"/>
                                </div>
                                <div className="col-sm-12 col-md-4 mb-4">
                                    <Pill titulo="HTML"/>
                                </div>
                            </div>
                        </div> 
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
