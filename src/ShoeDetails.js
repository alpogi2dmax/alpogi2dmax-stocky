import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'

function ShoeDetails() {

    const [shoe, setShoe] = useState({})

    const params = useParams();
    const shoeId = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/shoes/?id=${shoeId}`)
        .then(r => r.json())
        .then(data => setShoe(data[0]))
        .catch(error => console.error(error))
    }, [shoeId])

    console.log(shoe)

    if(!shoe) {
        return <div>Loading...</div>
    }
    

    return(
        <div>
        <header className='App-newheader'>
          <NavBar />
        </header>
        <img src='./images/sillhouette.png' alt={shoe.alias} className='sellimage'/>
        <div className='sellcard'>
            <h3>{shoe.name}</h3>
            <h4>{shoe.alias}</h4>
            <h4>Price: ${shoe.price}</h4>
            <h4>Count: </h4>
        </div>
      </div>
    )
}

export default ShoeDetails