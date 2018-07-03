import React, { Component } from 'react'
import './library.css'
import '../Search/search.css'
import Header from '../Header/Header'
import { connect } from 'react-redux'

class Collection extends Component{

            constructor(props){

                super(props)
                
            }


            render(){

                const { addedSongs } = this.props 

                console.log(addedSongs)

                return(

            <div className="collection-container">

                <Header />
                <h1>Jermaine's Music</h1>
                
                <div className="album-info-container">

                    
                    {addedSongs.data.map((data, i)=>{ //map over the data

                    return(

                    <div 
                        className="album-info-row"
                         key={i}>

                    <img 
                    src={data.artworkUrl100}
                    alt="Album art"
                    className="placeholder" />

                    <div className="album-info">
                    <p>Album: {data.collectionName}</p>
                    <p>Artist: {data.artistName}</p>
                    <p>Year: {data.releaseDate.slice(0,4)}</p>
                    
                    <a href={data.trackViewUrl} target="_blank">Preview Track</a>

                    </div>

                    </div>

                        )

                    })}

                </div>
                
                    {/* {music.slice(0,maxMusic).map((music, i)=>{ //return only the first three albums

                        return(

                        <div className="music-list"
                        key={i}>    


                            <img src={music.artworkUrl100}
                            alt="Album art"
                            />

                                <div className="music-list-row">
                                
                                    <p>Album:{music.collectionName}</p>
                                    <p>Artist:{music.artistName}</p>
                                    <p>Year:{music.releaseDate.slice(0,4)}</p>

                                </div>

                        </div>
                        )

                    })} */}
            </div>
                )
            }
        
             }

             function mapStateToProps(state){

                return{

                    addedSongs:state.songs
                }
             }

export default connect (mapStateToProps) (Collection)

