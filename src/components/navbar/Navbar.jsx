import React, { useState } from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
import Toggle from "../../utils/toggle/Toggle"
import { motion } from 'framer-motion'

const Navbar = () => {

    const variants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: -150, opacity: 0 },
    }

    const [isActive, setIsActive] = useState(false)

    return (
        <header className='navbar'>
            <div className="navbar-container">
                <NavLink to={'/'} className={'nav-logo'}>Fu<span>rnu</span>ture</NavLink>
                {isActive && (
                    <motion.nav
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        className="menu">
                        <div className="image">
                            <img src={require("../../assets/image/sofa2.png")} alt="" />
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
                    </motion.nav>
                )}
                <Toggle onClick={() => setIsActive(!isActive)} />
            </div>
        </header>
    )
}

export default Navbar