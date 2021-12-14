import React from 'react'
import ContactForm from '../../Forms/ContactForm'
import IconCard from '../../Cards/IconCard'
import CardList from '../../Cards/CardList'

const ContactSection = () => {


    const cards = [
        {
            icon: 'bi-chat-dots',
            title: 'Chat with us',
            description: 'Chat live with one of our support specialists.'
        },
        {
            icon: 'bi-people',
            title: 'Ask the community',
            description: 'Explore our community forums and communicate with other users.'
        },
        {
            icon: 'bi-question-circle',
            title: 'Support Center',
            description: "Browse FAQ's and support articles to find solutions."
        },
        {
            icon: 'bi-telephone',
            title: 'Call us',
            description: 'Call us during normal business hours at (555) 892-9403.'
        }
    ]

    return (
        <section className="py-5">
                <div className="container px-5">
                    {/* <!-- Contact form--> */}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Contact cards--> */}
                    <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                        <CardList cardsData={cards} CardComponent={IconCard} />
                    </div>
                </div>
            </section>
    )
}

export default ContactSection
