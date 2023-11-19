import React, { useState } from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
import Toggle from "../../utils/toggle/Toggle"

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <header className='navbar'>
            <div className="navbar-container">
                <NavLink to={'/'} className={'nav-logo'}>Fu<span>rnu</span>ture</NavLink>
                {isActive && (
                    <nav className="menu">
                        <div className="image">
                            <img src="https://dummyimage.com/600x400/000/fff" alt="" />
                        </div>
                        <ul className="list">
                            <li className="list-item">
                                <NavLink className="nav-link link">Shop Now</NavLink>
                            </li>
                            <li className="list-item">
                                <NavLink className="nav-link link">About</NavLink>
                            </li>
                            <li className="list-item">
                                <NavLink className="nav-link link">Contact</NavLink>
                            </li>
                            <li className="list-item">
                                <NavLink className="nav-link link">More</NavLink>
                            </li>
                        </ul>
                    </nav>
                )}
                <Toggle onClick={() => setIsActive(!isActive)} />
            </div>
        </header>
    )
}

export default Navbar