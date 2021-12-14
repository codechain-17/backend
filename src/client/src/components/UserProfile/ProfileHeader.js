import React from 'react'
import { Link } from 'react-router-dom'
import {images} from '../../assets/images'

const ProfileHeader = ({id}) => {

    const user = {
        name: 'Juan Perez',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
        avatar: 'avatar3',
        gender: 'male'
    }

    const colorStyle = user.gender === 'male' ? '#9de8f4' : '#CE7072';

    return (
        <div className="row">
            <div className="col-12">
                <div className="mb-3 profile">
                    <div className="row">
                        <div className="col-12">

                            <button className="position-absolute ml-3 mt-3 text-white">Editar</button>
                            
                            <div className="col-12 ml-auto m-auto">
                                <div className="p-3 my-4 rounded text-center shadow-sm">

                                    <Link exact to={`/dashboard/${id}`}>
                                        <img src={images[user.avatar]} alt='avatar' className="profile__avatarImage rounded-circle img-fluid mb-2" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="avatar images" style={{border: `5px solid ${colorStyle}`}} />
                                    </Link>

                                    <div>
                                        <h3 className="title text-light">{user.name}</h3>
                                        <p className="title text-light">{user.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
