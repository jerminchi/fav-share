import React, { Component } from 'react'
import './library.css'
import '../Search/search.css'
import Header from '../Header/Header'
import { connect } from 'react-redux'

import { getSavedMusic, signUserIn, getUser } from '../../actions/index'

import firebase from 'firebase'


class Collection extends Component{

            constructor(props){

                super(props)
                
            }

            componentDidMount(){

        
                this.props.getAllSongs(JSON.parse(localStorage.getItem('userData')))

            }

            render(){
                const { addedSongs, fireUser} = this.props

                console.log(this.props)
                // {this.props.addedSongs.data.docs.map(stuff=>console.log(stuff))}

                return(

                <div className="collection-container">

                <Header />
                <h1>Jermaine's Music</h1>
                   
                 <div className="album-info-container">

                        {console.log(this.props.addedSongs.data)}

                      
                        
                     {addedSongs.data.map((doc, i)=>{ //map over the data

                        const info = doc.data
                    return(

                    <div 
                        className="album-info-row"
                         key={i}>

                    <img 
                    src={info.artworkUrl100}
                    alt="Album art"
                    className="placeholder" />

                    <div className="album-info">
                    <p>Album: {info.collectionName}</p>
                    <p>Artist: {info.artistName}</p>
                    <p>Year: {info.releaseDate.slice(0,4)}</p>
                    
                    <a href={info.trackViewUrl} target="_blank">Preview Track</a>

                    </div>

                    </div>

                        )

                    })} 
                </div>
                 
                    

                    
            </div>
                )
            }
        
             }

             function mapStateToProps(state){


                return{

                    addedSongs:state.songs,
                    signedUser: state.user

                }
             }

             function mapDispatchToProps(dispatch){

                return{

                    dispatchSignIn: () => dispatch(getUser()),
                    getAllSongs: (user) => dispatch(getSavedMusic(user))
                }
             }

export default connect (mapStateToProps, mapDispatchToProps)(Collection)

