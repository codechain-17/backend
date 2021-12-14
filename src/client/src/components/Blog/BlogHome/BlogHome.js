import React from 'react'
import BlogCard from '../../Cards/BlogCard'
import CardList from '../../Cards/CardList'
import { BsArrowRight, BsTwitter, BsFacebook, BsLinkedin, BsYoutube} from 'react-icons/bs'

const BlogHome = () => {

    const blogCards = [
        {
            image: 'https://dummyimage.com/600x350/ced4da/6c757d',
            pill: 'News',
            title: 'Blog post title',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            author: {
                name: 'Kelly Rowan',
                image: 'https://dummyimage.com/40x40/ced4da/6c757d'
            },
            date: 'March 12, 2021 &middot; 6 min read'
        },
        {
            image: 'https://dummyimage.com/600x350/ced4da/6c757d',
            pill: 'Media',
            title: 'Another blog post title',
            description: "This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.",
            author: {
                name: 'Josiah Barclay',
                image: 'https://dummyimage.com/40x40/ced4da/6c757d'
            },
            date: 'March 23, 2021 &middot; 4 min read'
        },
        {
            image: 'https://dummyimage.com/600x350/ced4da/6c757d',
            pill: 'News',
            title: 'he last blog post title is a little bit longer than the others',
            description: "Some more quick example text to build on the card title and make up the bulk of the card's content.",
            author: {
                name: 'Evelyn Martinez',
                image: 'https://dummyimage.com/40x40/ced4da/6c757d'
            },
            date: 'April 2, 2021 &middot; 10 min read'
        }
    ]

    return (
        <div>
            <section className="py-5">
                <div className="container px-5">
                    <h1 className="fw-bolder fs-5 mb-4">Company Blog</h1>
                    <div className="card border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-0">
                            <div className="row gx-0">
                                <div className="col-lg-6 col-xl-5 py-lg-5">
                                    <div className="p-4 p-md-5">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                        <div className="h2 fw-bolder">Article heading goes here</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                                        <a className="stretched-link text-decoration-none" href="#!">
                                            Read more
                                            <BsArrowRight/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7"><div className="bg-featured-blog" style={{backgroundImage: "url('https://dummyimage.com/700x350/343a40/6c757d')"}}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <!-- Blog preview section--> */}
            <section className="py-5">
                <div className="container px-5">
                    <h2 className="fw-bolder fs-5 mb-4">Featured Stories</h2>
                    <div className="row gx-5">
                        <CardList cardsData={blogCards} CardComponent={BlogCard} />
                    </div>
                    <div className="text-end mb-5 mb-xl-0">
                        <a className="text-decoration-none" href="#!">
                            More stories
                            <BsArrowRight/>
                        </a>
                    </div>
                </div>
            </section>

            <section class="py-5 bg-light">
                <div class="container px-5">
                    <div class="row gx-5">
                        <div class="col-xl-4">
                            <div class="card border-0 h-100">
                                <div class="card-body p-4">
                                    <div class="d-flex h-100 align-items-center justify-content-center">
                                        <div class="text-center">
                                            <div class="h6 fw-bolder">Contact</div>
                                            <p class="text-muted mb-4">
                                                For press inquiries, email us at
                                                <br />
                                                <a href="#!">press@domain.com</a>
                                            </p>
                                            <div class="h6 fw-bolder">Follow us</div>
                                            <a class="fs-5 px-2 link-dark" href="#!"><BsTwitter/></a>
                                            <a class="fs-5 px-2 link-dark" href="#!"><BsFacebook/></a>
                                            <a class="fs-5 px-2 link-dark" href="#!"><BsLinkedin/></a>
                                            <a class="fs-5 px-2 link-dark" href="#!"><BsYoutube/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogHome
