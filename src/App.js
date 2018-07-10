import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Login from './components/Login/Login'

class App extends Component{

      constructor(props){

            super(props)
            this.state={

                  showModal:true,
                 
            }
      }

      toggleModal = ()=>{

            this.setState({showModal:!this.state.showModal})
      }

      render(){

            return(

                  <div className="container">
                  
                  <h1 className="main-heading">Share Music</h1>
                  <p>Search and share your favorite artists</p>
                  <button 
                  onClick={this.toggleModal}
                  className="get-started">Get Started</button>
                  { this.state.showModal && <Login/> }

                  </div>

            )

      }

}

export default App;
