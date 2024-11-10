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

    const totalAmount = carts.reduce((a, b) => a + b.price, 0)

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
                    <th className='table1'>Item Name</th>
                    <th className='table2'>Item Alias</th>
                    <th className='table3'>Amount</th>
                </tr>
                {carts.map(cart => (
                    <tr>
                        <td className='table1'>{cart.name}</td>
                        <td className='table2'>{cart.alias}</td>
                        <td className='table3'>${cart.price}</td>
                    </tr>
                ))}
                <tr>
                    <td className='table1'>Total Amount</td>
                    <td className='table2'></td>
                    <td className='table3'>${totalAmount}</td>
                </tr>
            </table>
        
        </div>
    )
}

export default AddToCart