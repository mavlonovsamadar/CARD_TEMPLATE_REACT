import React from 'react'
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {

const {img, title, author, price} = item

  return (
    <>
<div className="cards text-center">
    <div className="image_box">
        <img src={img} alt="" />
        <p>{title}</p>
        <p>{author}</p>
        <p>Price -{price} </p>
        <button onClick={() => handleClick(item)} style={{border:"none", borderRadius: "5px", backgroundColor: "greenyellow", padding:" 7px"}}>Add to Cart</button>
    </div>
</div>
    </>
  )
}

export default Cards