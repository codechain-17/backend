import React from 'react'

const CardList = ({cardsData, CardComponent}) => {
    return (
        <>
            {
                cardsData.map((card, index) => <CardComponent key={index} {...card} />)
            }
        </>
    )
}

export default CardList
