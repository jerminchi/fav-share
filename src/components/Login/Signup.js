import React, { Component } from 'react'
import { signUp } from '../../db/dbHelpers'

class Signup extends Component{

    constructor(props){

        super(props)
    
        this.state = {
    
          email: "",
          pass: ""

        }

      }
    
      handleChange = (e)=>{
    
        this.setState({[e.target.name]: e.target.value})
    
      }
    
      handleSubmit = (e)=>{
    
        //prevent refreshing page
        e.preventDefault()
        this.userSignUp()
    
      }
    
      userSignUp = ()=>{
    
        let user = { 

          user:this.state.email,
          password: this.state.pass

        }

        signUp(user.user, user.password)
        
    
        }
      
      render() {
        return (
    
            <form
            onSubmit={this.handleSubmit}>
    
              <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
      
              {/* <input type="text" name="email" placeholder="Email" value={this.state.email}  onChange={this.handleChange}/> */}
      
              <input type="password" name="pass" placeholder="Password" value={this.state.pass}  onChange={this.handleChange}/>
              
              <input type="submit" value="SIGN UP" />
    
            </form>
    
    
        )
      }

}

export default Signup