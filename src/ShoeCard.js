import React, {useState} from 'react'
import './App.css';
import { Link } from 'react-router-dom'

function ShoeCard({shoe}) {

    

    return (
        <div className='card'>
            <img className='image' src={shoe.image} alt={shoe.name} />
            <h4>{shoe.name}</h4>
            <p>{shoe.alias}</p>
            <p>Price: ${shoe.price}</p>
            <p>Inventory: {shoe.stock} pieces</p>
            <Link to={`/addtocart/${shoe.id}`}>Add to Cart</Link>
            
        </div>
    )
}

export default ShoeCard