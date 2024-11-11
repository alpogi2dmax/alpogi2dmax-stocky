import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'

function AddToCart() {


    const params = useParams();
    const shoeId = params.id;

    const [shoe, setShoe] = useState('')


    useEffect(() => {
        fetch(`http://localhost:3000/shoes/?id=${shoeId}`)
        .then(r => r.json())
        .then(itemData => setShoe(itemData[0]))
        .catch(error => console.error(error))
    }, [])

    console.log(shoe)
    

    if(!shoe) {
        return <div>Loading...</div>
    }
    
    return(
        <div>
            <header className='App-newheader'>
                <NavBar />
            </header>
            <div>
                <h2>Your are about to Purchase the following item:</h2>
                <h3>{shoe.name}</h3>
                <h2>{shoe.alias}</h2>
                <h1>{shoe.price}</h1>
                <label for='quantity'>Quantity: </label>
                <select id='quantity' >
                    
                </select>
            </div>
            
            
        </div>
    )
}

export default AddToCart