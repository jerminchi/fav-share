import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'



const App = () =>(

      <div className="container">
      
      <h1 className="main-heading">Share Music</h1>
      <p>Search and share your favorite artists</p>
      <Link to='/search'><button className="get-started">Get Started</button></Link>

      </div>

)

export default App;
