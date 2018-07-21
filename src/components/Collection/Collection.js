import React, { Component } from 'react'
import './library.css'
import '../Search/search.css'
import Header from '../Header/Header'
import { connect } from 'react-redux'

import { getSavedMusic, getUser } from '../../actions/index'


class Collection extends Component{

            constructor(props){

                super(props)
                
            }

            componentDidMount(){

        
                this.props.getAllSongs(JSON.parse(localStorage.getItem('userData')))
                this.props.dispatchSignIn()

            }

            render(){
                const { addedSongs, fireUser} = this.props

               
                return(

                <div className="collection-container">

                    <Header />
                    <h1>Jermaine's Music</h1>

                    <div className="album-info-container">
                       {addedSongs.data.map((doc, i)=>{ //map over the data
                        const info = doc.data().data

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

                    addedSongs:state.songs

                }
             }

             function mapDispatchToProps(dispatch){

                return{

                    dispatchSignIn: () => dispatch(getUser()),
                    getAllSongs: (user) => dispatch(getSavedMusic(user))
                }
             }

export default connect (mapStateToProps, mapDispatchToProps)(Collection)

