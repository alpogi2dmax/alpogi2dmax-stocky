import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function AddToCart() {


    const params = useParams();
    const shoeId = params.id;

    const navigate = useNavigate()

    const [shoe, setShoe] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [isPurchased, setIsPurchased] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3000/shoes/${shoeId}`)
        .then(r => r.json())
        .then(itemData => setShoe(itemData))
        .catch(error => console.error(error))
    }, [])

    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }

    function handlePurchaseClick() {
        fetch(`http://localhost:3000/shoes/${shoeId}`, {
            method: 'PATCH',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                stock: shoe.stock - quantity,
            }),
        })
        .then((response) => { if (!response.ok) { throw new Error('Network response was not ok'); } return response.json(); })
        .then(() => {
            setIsPurchased(true)
            setTimeout(navigate, 3000,'/')
        })
        .catch(error => console.error(error));
    }

    let stockArray = (Array.from({length: shoe.stock + 1 }, (_, i) => i))

    console.log(shoe.stock - quantity)
    

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
                <img src={shoe.image} alt={shoe.alias} />

                <h4>Unit Price ${shoe.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                <label for='quantity'>Quantity: </label>
                <select id='quantity' value={quantity} onChange={handleQuantityChange}>
                    {stockArray.slice(1).map(x => (
                        <option>{x}</option>
                    ))}
                </select>
                <h2>Total Price: ${(quantity * shoe.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</h2>
                <button onClick={handlePurchaseClick}>Purchase Items</button>
                {isPurchased ? <h3>Thank you for purchasing, you will be redirect to home!</h3>: null }
            </div>
            
            
        </div>
    )
}

export default AddToCart