import React, { Component } from 'react'
import './library.css'
import '../Search/search.css'
import Header from '../Header/Header'
import { connect } from 'react-redux'

import { getSavedMusic, deleteSong, getUser } from '../../actions/index'


class Collection extends Component{

            constructor(props){

                super(props)
                
            }

            componentDidMount(){

                this.props.dispatchAllSongs(JSON.parse(localStorage.getItem('userData')))
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
                            
                            return(

                            <div 
                            key={i}
                            className="album-info-row">

                                <img 
                                src={doc.artworkUrl100}
                                alt="Album art"
                                className="placeholder" />

                                <div className="album-info">
                                <p>Album:{doc.collectionName}</p>
                                <p>Artist:{doc.artistName}</p>
                                <p>Year:{doc.releaseDate.slice(0,4)}</p>
                                
                                <a href={doc.trackViewUrl} target="_blank">Preview Track</a>
                                <button>Share Track</button>
                                <button
                                onClick={() =>this.props.dispatchDelete(JSON.parse(localStorage.getItem('userData')), i)}
                                >Delete Track</button>



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
                    dispatchAllSongs: (user) => dispatch(getSavedMusic(user)),
                    dispatchDelete: (user, index) => dispatch(deleteSong(user, index))

                }
             }

export default connect (mapStateToProps, mapDispatchToProps)(Collection)

