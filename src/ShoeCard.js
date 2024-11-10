import React from 'react'
import './App.css';

function ShoeCard({shoe}) {

    console.log(shoe)

    return (
        <div className='card'>
            <img className='image' src={shoe.image} alt={shoe.name} />
            <p>{shoe.name}</p>
        </div>
    )
}

export default ShoeCard
