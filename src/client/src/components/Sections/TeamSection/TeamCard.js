import React from 'react'

const TeamCard = ({ name, job, image}) => {
    return (
        <div className="col mb-5 mb-5 mb-xl-0">
            <div className="text-center">
                <img className="img-fluid rounded-circle mb-4 px-4" src={image} alt={name} />
                <h5 className="fw-bolder">{name}</h5>
                <div className="fst-italic text-muted">{job}</div>
            </div>
        </div>
    )
}

export default TeamCard
