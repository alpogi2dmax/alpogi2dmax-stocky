import React from 'react'


import { NavLink } from 'react-router-dom'
import './App.css';

function NavBar() {

    return (
        <div>
            <h1 className='h1header'>StockY</h1>
            <nav>
                <NavLink
                    to='/'
                >
                    Home
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar