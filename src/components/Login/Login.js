import React, { Component } from 'react'
import './login.css'
import Signup from './Signup'
import Signin from './Signin'


class Login extends Component{

            constructor(props){

                super(props)
                this.state={

                    selectedRoute: 'Sign Up'
                }
                
            }

            updateRoute = (route) =>{
    
                this.setState({selectedRoute:route.target.firstChild.nodeValue})    
              }

            


            render(){
              
                let routes = ['Sign Up', 'Login']
                return(

                   <div className="login-container">

                    <ul className="routes">

                    {routes.map((route)=>{

                        return(

                        <li
                        style={route === this.state.selectedRoute ? {borderBottom:'3px #ffffff solid'} : null}
                        onClick={this.updateRoute}
                        key={route}>{route}</li>
                        )
                    })}

              </ul>
                

                {this.state.selectedRoute === "Sign Up" ? <Signup/> : <Signin/>}

            

                    {/* <input type="text" name="uname"/>
                    <input type="password" name="pass"/>
                    <input type="submit" value="Sign In"/> */}


                   </div>
                )
        
             }

            }


            
            

            

export default Login
