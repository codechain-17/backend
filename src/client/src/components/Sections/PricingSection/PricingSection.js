import React from 'react'
import CardList from '../../Cards/CardList'
import PricingCard from '../../Cards/PricingCard'

const PricingSection = () => {

    const plans = [
        {
            plan: 'Free',
            recomended: false,
            price: '$0',
            time: '/mo.',
            details: {
                users: 1,
                storage: '5GB',
                publicProjects: true,
                communityAccess: true,
                privateProjects: false,
                support: false,
                linkedDomain: false,
                linkedDomainType: null,
                statusReport: false
            }
        },
        {
            plan: 'Pro',
            recomended: true,
            price: '$9',
            time: '/mo.',
            details: {
                users: 5,
                storage: '5GB',
                publicProjects: true,
                communityAccess: true,
                privateProjects: true,
                support: true,
                linkedDomain: true,
                linkedDomainType: null,
                statusReport: false
            }
        },
        {
            plan: 'Enterprice',
            recomended: false,
            price: '$49',
            time: '/mo.',
            details: {
                users: 'Unlimited',
                storage: '5GB',
                publicProjects: true,
                communityAccess: true,
                privateProjects: true,
                support: true,
                linkedDomain: true,
                linkedDomainType: 'Unlimited',
                statusReport: true
            }
        }
    ]

    return (
        <section class="bg-light py-5">
            <div class="container px-5 my-5">
                <div class="text-center mb-5">
                    <h1 class="fw-bolder">Pay as you grow</h1>
                    <p class="lead fw-normal text-muted mb-0">With our no hassle pricing plans</p>
                </div>
                <div class="row gx-5 justify-content-center">                
                    <CardList cardsData={plans} CardComponent={PricingCard} />  
                </div>
            </div>
        </section>
    )
}

export default PricingSection
