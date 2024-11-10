import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import './App.css';

function SellShoes() {

    const [image, setImage] = useState('./images/sillhouette.png')
    const [name, setName] = useState('')
    const [alias, setAlias] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [shoeObj, setShoeObj] = useState('')
    const navigate = useNavigate()

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleAliasChange(e) {
        setAlias(e.target.value)
    }

    function handleImageChange(e) {
        setImage(e.target.value)
    }

    function handlePriceChange(e) {
        setPrice(e.target.value)
    }

    function handleStockChange(e) {
        setStock(e.target.value)
    }

    function handleSellSubmit(e) {
        e.preventDefault()
        let shoeObj = {
            name: name,
            alias: alias,
            image: image,
            price: price,
            stock: stock
        }

        setShoeObj(shoeObj)
        navigate('/')
    }

    
    return (
        
        <div>
            <header className='App-newheader'>
                <NavBar />
            </header>
            <h1>Sell Your Shoes</h1>
            <form onSubmit={handleSellSubmit}>
                <input type='text' name='name' id='name' placeholder='Enter Shoe Name' value={name} onChange={handleNameChange}></input>
                <input type='text' name='alias' id='alias' placeholder='Enter Shoe Alias' value={alias} onChange={handleAliasChange}></input>
                <input type='text' name='image' id='image' placeholder='Enter Shoe Image' value={image} onChange={handleImageChange}></input>
                <input type='number' name='price' id='price' placeholder='Enter Price' value={price} onChange={handlePriceChange}></input>
                <input type='number'name='stock' id='stock' placeholder='Enter Stock Number' value={stock} onChange={handleStockChange}></input>
                <br></br>
                <img src={image} alt={alias} className='sellimage'/>
                <div className='sellcard'>
                    <h3>Name: {name === '' ? 'Shoe Name' : name}</h3>
                    <h4>Alias: {alias === '' ? 'Alias' : alias}</h4>
                    <h4>Price: {price === 0 ? 'Price' : price}</h4>
                    <h4>Stock Number: {stock === 0 ? 'Stock Number' : stock}</h4>
                    <button type='submit'>Sell Shoe</button>
                </div>
            </form>
            <Outlet context={shoeObj}/>
        </div>
    )
}

export default SellShoes