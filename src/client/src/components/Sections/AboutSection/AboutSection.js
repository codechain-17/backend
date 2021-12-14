import React from 'react'
import ContactForm from '../../Forms/ContactForm'


const AboutSection = () => {
    
    return (
        <section className="py-5 bg-light" id="scroll-target">
            <div className="container px-5">
                    {/* <!-- Contact form--> */}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Estemos en contacto</h1>
                            <p className="lead fw-normal text-muted mb-0">Nos encanta saber de ti.</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                
                </div>
        </section>
    )
}

export default AboutSection
