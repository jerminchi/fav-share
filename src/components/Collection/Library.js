import React, { Component } from 'react'
import './library.css'
import '../Search/search.css'
import Header from '../Header/Header'
import { connect } from 'react-redux'

import { getSavedMusic } from '../../actions/index'


class Collection extends Component{

            constructor(props){

                super(props)
                
            }

            componentDidMount(){

                this.props.getAllSongs()
            }


            render(){
                const { addedSongs } = this.props 

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

                    getAllSongs: ()=> dispatch(getSavedMusic())
                }
             }

export default connect (mapStateToProps, mapDispatchToProps)(Collection)

