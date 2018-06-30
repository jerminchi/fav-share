import React from 'react'
import './header.css';

import { Link } from 'react-router-dom'

const Header = (props) => (

    <div className= "header">
        
        <ul>
            <Link to={{pathname:'/search'}}><li>Search</li></Link>
            <Link to={{pathname:'/library'}}><li>Library</li></Link>
        </ul>
        
    </div>
)

export default Header