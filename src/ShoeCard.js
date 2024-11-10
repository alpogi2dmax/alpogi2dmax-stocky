import React from 'react'
import './App.css';

function ShoeCard({shoe}) {

    console.log(shoe)

    return (
        <div className='card'>
            <img className='image' src={shoe.image} alt={shoe.name} />
            <h4>{shoe.name}</h4>
            <p>{shoe.alias}</p>
            <p>Price: ${shoe.price}</p>
        </div>
    )
}

export default ShoeCard
