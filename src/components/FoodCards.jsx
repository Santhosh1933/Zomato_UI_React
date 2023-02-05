import React from 'react'

export const FoodCards = (props) => {
  return (
    <>

        <div className="FoodContainer">
            <img src={props.img} alt="" />
            <p className='title'>{props.title}</p>
            <p className='subTitle'>{props.subtitle}</p>
        </div>

    </>
  )
}
