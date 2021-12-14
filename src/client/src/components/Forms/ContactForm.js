import { Formik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'

const schema = Yup.object().shape({
    name: Yup.string().required('Este campo es obligatorio'),
    email: Yup.string().email('El correo electrónico es inválido').required('Este campo es obligatorio'),
    phone: Yup.string().required('Este campo es obligatorio'),
    message: Yup.string().required('Este campo es obligatorio')
})

const ContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    // const handleChange = () => {
    //     setValues({
    //         ...values,
    //         [e.target.value] : e.target.value
    //     })
    // }

    const handleSubmit = () => {

    }


    return (
        
        <Formik
            initialValues = {{...values}}
            validationSchema={schema}
            validateOnBlur
            onSubmit
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <form id="contactForm" onSubmit={handleSubmit}>

                    {/* Name input */}
                    <div className="form-floating mb-3">
                        <input 
                            className="form-control" 
                            id="name" 
                            name='name'
                            type="text" 
                            placeholder="Ingresa tu nombre" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <label for="name">Nombre</label>
                        {errors.name && touched.name && errors.name}
                    </div>

                    {/* Email address input */}
                    <div className="form-floating mb-3">
                        <input 
                            className="form-control" 
                            id="email" t
                            type="email" 
                            name='email'
                            placeholder="name@example.com" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <label for="email">Correo Electónico</label>
                        {errors.email && touched.email && errors.email}
                    </div>

                    {/* Phone number input */}
                    <div className="form-floating mb-3">
                        <input 
                            className="form-control" 
                            id="phone" 
                            type="tel" 
                            name='phone'
                            placeholder="(123) 456-7890" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                        />
                        <label for="phone">Teléfono</label>
                        {errors.phone && touched.phone && errors.phone}
                    </div>

                    {/* Message input */}
                    <div className="form-floating mb-3">
                        <textarea 
                            className="form-control" 
                            id="message" 
                            type="text" 
                            name='message'
                            style={{height: '10rem'}} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                        > Ingresa tu mensaje
                        </textarea>
                        <label for="message">Mensaje</label>
                        {errors.message && touched.message && errors.message}
                    </div>
                    
                    {/* <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div> */}
                    
                    {/* <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>*/}
                    
                    <div className="d-grid">
                        <button 
                            className="btn btn-primary btn-lg disabled" 
                            id="submitButton" 
                            type="submit">
                                Enviar
                        </button>
                    </div> 
                </form>
            )}
        </Formik>
    )
}

export default ContactForm
