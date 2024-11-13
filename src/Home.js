import React, { useState } from 'react'
import ShoeList from './ShoeList'
import Search from './Search'
import { useOutletContext } from 'react-router-dom'

function Home() {

    const shoes = useOutletContext()

    const [searchShoe, setSearchShoe] = useState('')

    function handleSearchShoe(searchWord) {
        setSearchShoe(searchWord)
    }

    const filteredShoes = shoes[0].filter(shoe => (shoe.name+' '+shoe.alias).toLowerCase().includes(searchShoe.toLowerCase()))

    return (
        <div>
            <Search onSearchShoe={handleSearchShoe}/>
            <ShoeList shoes={filteredShoes}/>
        </div>
    )
}

export default Home