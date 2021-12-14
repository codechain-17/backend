import React from 'react'

const BlogCard = ({image, pill, title, description, author, date}) => {
    return (
        <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={image} alt={title} />
                <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{pill}</div>
                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">{title}</div></a>
                    <p className="card-text mb-0">{description}</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle me-3" src={author.image} alt={author.name} />
                            <div className="small">
                                <div className="fw-bold">{author.name}</div>
                                <div className="text-muted">{date}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
