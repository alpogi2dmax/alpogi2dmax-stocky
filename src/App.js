import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Search from './Search'
import ShoeList from './ShoeList'
import { useOutletContext } from 'react-router-dom'

function App() {

  const [shoes, setShoes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/shoes')
    .then(r => r.json())
    .then(data => setShoes(data))
  }, [])

  const newShoes = useOutletContext

  console.log(newShoes)

  return (
    <div>
      <header className='App-newheader'>
        <NavBar />
      </header>
      <div>
        <Search />
        <ShoeList shoes={shoes}/>
      </div>
    </div>
  );
}

export default App;
