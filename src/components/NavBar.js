import React from  'react'
import { Link } from 'react-router-dom'


const NavBar = () => (
    <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
    </ul>
)

export default NavBar

