import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import './App.css';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';

function AddToCart() {

    const rerender = useOutletContext()


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
        .then((response) => response.json())
        .then(() => {
            setIsPurchased(true)
            rerender[1]()
            setTimeout(navigate, 3000,'/')
        })
    }

    let stockArray = shoe.stock > 20 ? (Array.from({length: 20 + 1 }, (_, i) => i)) : (Array.from({length: shoe.stock + 1 }, (_, i) => i))

    

    if(!shoe) {
        return <div>Loading...</div>
    }
    
    return(
            <div className='addtocart'>
                <h2>Your are about to Purchase the following item:</h2>
                <h3>{shoe.name}</h3>
                <h2>{shoe.alias}</h2>
                <h4>Unit Price ${shoe.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                <label for='quantity'>Quantity: </label>
                <select id='quantity' value={quantity} onChange={handleQuantityChange}>
                    {stockArray.slice(1).map(x => (
                        <option>{x}</option>
                    ))}
                </select>
                <h2>Total Price: ${(quantity * shoe.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</h2>
                <button onClick={handlePurchaseClick}>Purchase Items</button>
                {isPurchased ? <h3>Thank you for purchasing, you will be redirected to home!</h3>: null }
            </div>
    )
}

export default AddToCart