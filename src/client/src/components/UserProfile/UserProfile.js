import React from 'react'
import CardList from '../Cards/CardList'
import PillCard from '../Cards/PillCard'
import Sidebar from '../Sidebar/Sidebar'
import ProfileHeader from './ProfileHeader'
import { MdQuiz } from 'react-icons/md'
import { RiFileCopy2Fill } from 'react-icons/ri'
import { MdOutlineWork } from 'react-icons/md'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const {id} = useParams()

    const pills = [
        {
            link: 'quizzes',
            icon: <MdQuiz/>,
            title: 'Quizzes',
            quantity: 2,
            id: id
        },
        {
            link: 'postulaciones',
            icon: <RiFileCopy2Fill/>,
            title: 'Postulaciones',
            quantity: 2,
            id: id
        },
        {
            link: 'guardado',
            icon: <MdOutlineWork/>,
            title: 'Empleos guardados',
            quantity: 3,
            id: id
        }
    ]


    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-8 col-lg-9">
                        <div className="dashboard-area">
                            <ProfileHeader id={id} />
                            <div className="row">
                                <div className="col-12">
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="row">
                                                <CardList cardsData={pills} CardComponent={PillCard} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfile
