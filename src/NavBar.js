import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css';

function NavBar() {

    return (
        <div >
            <h1 className='h1header'>StockY</h1>
            <hr></hr>
            <nav className='navbar'>
                <NavLink
                    to='/'
                    className='nav-link'
                >
                    Home
                </NavLink>
                {/* <NavLink
                    to='/sellshoes'
                    className='nav-link'
                >
                    Sell Shoes
                </NavLink> */}
                <NavLink
                    to='/addtocart/:id'
                    className='nav-link'
                >
                    Add to Cart
                </NavLink>
                {/* <NavLink
                    to='/feature'
                    className='nav-link'
                >
                    Feature
                </NavLink> */}
            </nav>
            <hr></hr>

        </div>
    )
}

export default NavBar