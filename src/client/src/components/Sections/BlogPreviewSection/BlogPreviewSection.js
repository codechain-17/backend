import React from 'react'
import BlogPreviewCard from './BlogPreviewCard'

const BlogPreviewSection = () => {
    return (
        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                        <div className="text-center">
                            <h2 className="fw-bolder">From our blog</h2>
                            <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-5">
                    <BlogPreviewCard />
                </div>
            </div>
        </section>
    )
}

export default BlogPreviewSection
