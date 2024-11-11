import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'

function AddToCart() {


    const params = useParams();
    const shoeId = params.id;

    const [shoe, setShoe] = useState('')
    const [quantity, setQuantity] = useState(1)

    


    useEffect(() => {
        fetch(`http://localhost:3000/shoes/?id=${shoeId}`)
        .then(r => r.json())
        .then(itemData => setShoe(itemData[0]))
        .catch(error => console.error(error))
    }, [])

    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }

    let stockArray = (Array.from({length: shoe.stock + 1 }, (_, i) => i))

    console.log(quantity)
    

    if(!shoe) {
        return <div>Loading...</div>
    }
    
    return(
        <div>
            <header className='App-newheader'>
                <NavBar />
            </header>
            <div className='addtocart'>
                <h2>Your are about to Purchase the following item:</h2>
                <h3>{shoe.name}</h3>
                <h2>{shoe.alias}</h2>
                <h4>Unit Price ${shoe.price}</h4>
                <label for='quantity'>Quantity: </label>
                <select id='quantity' value={quantity} onChange={handleQuantityChange}>
                    {stockArray.slice(1).map(x => (
                        <option>{x}</option>
                    ))}
                </select>
                <h2>Total Price: </h2>
            </div>
            
            
        </div>
    )
}

export default AddToCart