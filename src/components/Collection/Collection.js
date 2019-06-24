import React, { Component } from 'react'
import './collection.css'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import { getSavedMusic, deleteSong, getUser } from '../../actions/index'


class Collection extends Component{

            componentDidMount(){

                this.props.dispatchAllSongs(JSON.parse(localStorage.getItem('userData')))
                this.props.dispatchSignIn()
            }

            shareSong = (link) =>{


                    navigator.share({

                        title:'Great Song',
                        text: 'Listen to this song!',
                        url: link
                

                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                    })

              
            }
             

            render(){
                console.log(this.props)

                const { addedSongs, fireUser} = this.props
                return(

                <div className="collection-container">

                    <Header />
                    <h1>All Music</h1>

                    <div className="album-info-container">
                       { addedSongs.data.map((doc, i)=>{ //map over the data
                            
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
                                
                                <a href={doc.trackViewUrl} target="_blank" rel="noopener noreferrer">Preview Track</a>
                               {
                                   navigator.share ? <button 
                                   onClick={() => this.shareSong(doc.trackViewUrl)}>Share Track</button> : null
                                } 
                                <button
                                onClick={() => this.props.dispatchDelete(JSON.parse(localStorage.getItem('userData')), i)}
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


                return {

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

