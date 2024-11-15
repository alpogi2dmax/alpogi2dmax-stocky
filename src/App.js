import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom';
import Search from './Search'
import ShoeList from './ShoeList'


function App() {

  const [shoes, setShoes] = useState([])

  
  useEffect(() => {
    fetch('http://localhost:3000/shoes')
    .then(r => r.json())
    .then(data => setShoes(data))
  }, [])

  function rerender() {
    fetch('http://localhost:3000/shoes')
    .then(r => r.json())
    .then(data => setShoes(data))
  }

  function addShoe(newShoe) {
    setShoes([...shoes, newShoe])
  }

  return (
    <div>
      <header className='App-newheader'>
        <NavBar />
      </header>
      <Outlet context={[shoes, rerender, addShoe]}/>
    </div>
  );
}

export default App;
