import React from 'react'
import { Link } from 'react-router-dom'

export const SocialMediaNav = () => {
    return (
        <>
            <div class="footer-social-icons my-5">
                <ul class="social-icons">
                    <li className="mx-1"><Link to={{pathname: "https://www.facebook.com/getonbrd" }} target="_blank" className="social-icon"> <i class="fa fa-facebook"></i></Link></li>
                    <li className="mx-1"><Link to={{pathname: "https://www.instagram.com/getonbrd/" }} target="_blank" className="social-icon"> <i class="fa fa-instagram"></i></Link></li>
                    <li className="mx-1"><Link to={{pathname: "https://www.getonbrd.com/blog/posts" }} target="_blank" className="social-icon"> <i class="fa fa-youtube"></i></Link></li>
                    <li className="mx-1"><Link to={{pathname: "https://twitter.com/intent/user?screen_name=getonbrd" }} target="_blank" className="social-icon"> <i class="fa fa-twitter"></i></Link></li>
                    <li className="mx-1"><Link to={{pathname: "https://www.linkedin.com/company/get-on-board/" }} target="_blank" className="social-icon"> <i class="fa fa-linkedin"></i></Link></li>
                    <li className="mx-1"><Link to={{pathname: "https://github.com/getonbrd/" }} target="_blank" className="social-icon"> <i class="fa fa-github"></i></Link></li>
                </ul>
            </div>
        </>
        
    )
}
