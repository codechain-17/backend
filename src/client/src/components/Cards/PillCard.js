import React from 'react'
import { Link } from 'react-router-dom'


const PillCard = ({link, icon, title, quantity, id}) => {
    return (
        <div class="col-lg-4 col-sm-6">
            <Link exact to={`/dashboard/${id}/${link}`} className='profile__link'>
                <div class="pillCard mb-2 mb-md-5 py-3">
                    <div class="content">
                        <div class="row">
                            <div class="col d-flex justify-content-center align-items-center">
                                <div class="icon-big text-center">
                                    <div class="notif">{quantity}</div>
                                    {icon}
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center align-items-center">
                                <div class="numbers">
                                    <p className='p-2'>{title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PillCard
