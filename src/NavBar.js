import Search from './Search'
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
            <Search/>
        </div>
    )
}

export default NavBar