import React from 'react'

const IconCard = ({icon, title, description}) => {
    return (
        <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">{icon}</div>
            <div className="h5 mb-2">{title}</div>
            <p className="text-muted mb-0">{description}</p>
        </div>
    )
}

export default IconCard
