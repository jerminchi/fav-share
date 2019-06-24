import React from 'react';
import './header.css';
import { signOut } from '../../server/db/dbHelpers';
import { Link } from 'react-router-dom';

const Header = (props) => (

    <div className= "header">
        <ul>
            <Link to={{pathname:'/search'}}><li>Search</li></Link>
            <Link to={{pathname:'/collection'}}><li>Library</li></Link>
            <Link to={{pathname:'/'}}><li onClick={signOut}>SignOut</li></Link>
        </ul>
    </div>

   
)


export default Header