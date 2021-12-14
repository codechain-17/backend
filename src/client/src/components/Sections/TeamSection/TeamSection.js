import React from 'react'
import TeamCard from './TeamCard'

const TeamSection = () => {

    const team = [
        {
            name: 'Ibbie Eckart',
            job: 'Founder &amp; CEO',
            image: 'https://dummyimage.com/150x150/ced4da/6c757d'
        },
        {
            name: 'Arden Vasek',
            job: 'CFO',
            image: 'https://dummyimage.com/150x150/ced4da/6c757d'
        },
        {
            name: 'Toribio Nerthus',
            job: 'Operations Manager',
            image: 'https://dummyimage.com/150x150/ced4da/6c757d'
        },
        {
            name: 'Malvina Cilla',
            job: 'CTO',
            image: 'https://dummyimage.com/150x150/ced4da/6c757d'
        }
    ]

    return (
        <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">Our team</h2>
                        <p className="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        {
                            team.map((member, index) => <TeamCard key={index} {...member}/>)
                        }
                    </div>
                </div>
            </section>
    )
}

export default TeamSection
