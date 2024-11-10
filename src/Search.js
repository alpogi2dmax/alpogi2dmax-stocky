import React, { useState, useEffect} from 'react'
import './App.css';

function Search({onSearchShoe}) {

    const [search, setSearch] = useState('')

    function handleSearchChange(e) {
        setSearch(e.target.value)
        onSearchShoe(e.target.value)
    }


    return (
        <div className='searchbar'>
            <input type='text' placeholder='Search for shoes' value={search} onChange={handleSearchChange}></input>
        </div>
    )
}

export default Search