import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'




function ShoeDetails() {

    const [purachaseShoe, setPurchaseShoe] = useState({})

    const params = useParams();
    const shoeId = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/shoes/?id=${shoeId}`)
        .then(r => r.json())
        .then(data => setPurchaseShoe(data[0]))
        .catch(error => console.error(error))
    }, [shoeId])

    console.log(purachaseShoe)

    if(!purachaseShoe) {
        return <div>Loading...</div>
    }
    

    return(
        <div>
        <header className='App-newheader'>
          <NavBar />
        </header>
        <div>
            <img src={purachaseShoe.image} alt={purachaseShoe.alias} />
            <p>{purachaseShoe.price}</p>
        </div>
      </div>
    )
}

export default ShoeDetails