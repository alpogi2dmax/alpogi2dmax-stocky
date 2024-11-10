import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'

function AddToCart() {

    const [carts, setCarts] = useState([])

    const params = useParams();
    const shoeId = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/shoes/?id=${shoeId}`)
        .then(r => r.json())
        .then(itemData => {
            fetch('http://localhost:3000/cart/', {
               method: 'POST',
               headers: {
                'Content-Type': 'application/json'
               },
               body: JSON.stringify(itemData[0]),
            })
                .then(r => r.json())
                .then(() => {
                    fetch('http://localhost:3000/cart/')
                    .then(r => r.json())
                    .then(data => setCarts(data))
                })
        })
        .catch(error => console.error(error))
    }, [])

    console.log(carts)

    if(!carts) {
        return <div>Loading...</div>
    }
    
    return(
        <div>
            <header className='App-newheader'>
            <NavBar />
            </header>
            <table>
                <tr>
                    <th>Item Name</th>
                    <th>Item Alias</th>
                    <th>Amount</th>
                </tr>
                {carts.map(cart => (
                    <div>
                        <td>{cart.name}</td>
                        <td>{cart.alias}</td>
                        <td>{cart.price}</td>
                    </div>
                ))}
                <tr>
                    <td>Total Amount</td>
                    <td>''</td>
                    <td>Total Amount</td>
                </tr>
            </table>
        
        </div>
    )
}

export default AddToCart