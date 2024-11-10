import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Search from './Search'
import ShoeList from './ShoeList'

function App() {

  const [shoes, setShoes] = useState([])
  const [searchShoe, setSearchShoe] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/shoes')
    .then(r => r.json())
    .then(data => setShoes(data))
  }, [])

  function handleSearchShoe(searchWord) {
    setSearchShoe(searchWord)
  }

  const filteredShoes = shoes.filter(shoe => (shoe.name+' '+shoe.alias).toLowerCase().includes(searchShoe.toLowerCase()))

  return (
    <div>
      <header className='App-newheader'>
        <NavBar />
      </header>
      <div>
        <Search onSearchShoe={handleSearchShoe}/>
        <ShoeList shoes={filteredShoes}/>
      </div>
    </div>
  );
}

export default App;
