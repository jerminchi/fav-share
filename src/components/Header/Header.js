import React from 'react'
import './header.css';

const Header = (props) => (

    <div className= "header">
        <button className="add-btn"
        onClick={props.onClick}><i className="fa fa-3x fa-plus-circle"></i></button>
    </div>
)

export default Header