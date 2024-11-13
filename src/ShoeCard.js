import React, {useState} from 'react'
import './App.css';
import { Link } from 'react-router-dom'

function ShoeCard({shoe}) {

    return (
        <div className='card'>
            <img className='image' src={shoe.image} alt={shoe.name} />
            <h4>{shoe.name}</h4>
            <p>{shoe.alias}</p>
            <p>Price: ${shoe.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            {shoe.stock === 0 ?
                <h2>OUT OF STOCK</h2> :
                <div>
                    <p>Inventory: {shoe.stock} pieces</p>
                    <Link to={`/addtocart/${shoe.id}`}>Add to Cart</Link>
                </div>
            }
        </div>
    )
}

export default ShoeCard
