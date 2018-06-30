import React from 'react'
import './library.css'
import Header from '../Header/Header'

const Collection = () =>(


            <div className="collection-container">

                <Header />
                <h1>Jermaine's Music</h1>
                
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

export default Collection

