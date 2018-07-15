import React, { Component } from 'react'
import { signIn } from '../../db/dbHelpers'
import { Redirect } from 'react-router-dom'


class Signin extends Component{

    constructor(props){

        super(props)

        this.state={

            email:"",
            pass: "",
            redirect:false

        }
    }

    handleChange = (e)=>{

        this.setState({[e.target.name]: e.target.value})
    
      }
    
      handleSubmit = (e)=>{
    
        //prevent refreshing page
        e.preventDefault()
        this.userLogIn()
    
      }

      userLogIn= ()=>{

        //credentials for user
          let user = {

            email:this.state.email,
            password: this.state.pass
          }

          signIn(user.email, user.password)


          this.setState({redirect:true})

        }

        render() {


            //redirects users to the home on login
             if(this.state.redirect){
             
             return <Redirect to={'/search'}/>
             }
            
        
            return (
        
                
                <div>
                  
                <form
                  onSubmit={this.handleSubmit}>
        
                  <input type="email" name="email" placeholder="Username" value={this.state.email}  onChange={this.handleChange}/>
        
                  <input type="password" name="pass" placeholder="Password" value={this.state.pass}  onChange={this.handleChange}/>
                  
                  <input type="submit" value="LOGIN" />
        
                </form>
                </div>
                
        
        
        
            )
          }
}

export default Signin