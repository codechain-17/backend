import React from 'react'
import { BsStarFill, BsCheck, BsX } from 'react-icons/bs'

const PricingCard = ({plan, recomended, price, time, details}) => {

    const { users, storage, publicProjects, communityAccess, privateProjects, support, linkedDomain, linkedDomainType, statusReport} = details

    return (
        <div className="col-lg-6 col-xl-4">
            <div className="card mb-5 mb-xl-0">
                <div className="card-body p-5">
                    <div className="small text-uppercase fw-bold text-muted">
                        {
                            recomended && <BsStarFill className='text-warning' />
                        }
                        {plan}
                    </div>
                    <div className="mb-3">
                        <span className="display-4 fw-bold">{price}</span>
                        <span className="text-muted">{time}</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                        <li className="mb-2">
                            <BsCheck className="text-primary"/>
                            <strong>{users} users</strong>
                        </li>
                        <li className="mb-2">
                            <BsCheck className="text-primary"/>                            
                            {storage} storage
                        </li>
                        <li className="mb-2">
                            {
                                publicProjects
                                    ? <BsCheck className="text-primary"/>
                                    : <BsX />
                            } 
                            Unlimited public projects
                        </li>
                        <li className="mb-2">
                            {
                                communityAccess
                                    ? <BsCheck className="text-primary"/>
                                    : <BsX />
                            }
                            Community access
                        </li>
                        <li className={privateProjects ? 'mb-2' : "mb-2 text-muted"}>
                            {
                                privateProjects
                                    ? <BsCheck className="text-primary"/>
                                    : <BsX />
                            } 
                            Unlimited private projects
                        </li>
                        <li className={support ? 'mb-2' : "mb-2 text-muted"}>
                            {
                                support
                                    ? <BsCheck className="text-primary"/>
                                    : <BsX />
                            } 
                            Dedicated support
                        </li>
                        <li className={linkedDomain ? 'mb-2' : "mb-2 text-muted"}>
                            {
                                linkedDomain
                                    ? <BsCheck className="text-primary"/>
                                    : <BsX />
                            } 
                            {
                                (linkedDomainType === null)
                                    ? 'Free linked domain'
                                    : <>
                                        <strong>Unlimited</strong> linked domains
                                    </>
                            } 
                        </li>
                        <li className={!statusReport && "text-muted"}>
                            {
                                statusReport
                                    ? <BsCheck className="text-primary"/>
                                    : <BsX />
                            } 
                            Monthly status reports
                        </li>
                    </ul>
                    <div className="d-grid"><a className={ recomended ? 'btn btn-primary' : "btn btn-outline-primary"} href="#!">Choose plan</a></div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard
