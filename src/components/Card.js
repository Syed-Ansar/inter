import React from 'react'

const Card = ({name,gender,thumbnail}) => {
  return (
    <>
    <div style={{margin:'10px',width:'fit-content',padding:'10px',border:"2px solid black"}}>
    <div style={{fontSize:'1rem'}}>{name}</div>
    <div style={{fontSize:'1rem'}}>{gender}</div>
    <img src={thumbnail} alt={name}/>
    </div>

    </>
  )
}

export default Card