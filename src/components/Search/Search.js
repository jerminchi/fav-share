import React, { Component } from 'react';
import axios from 'axios'

import '../Search/search.css'
import Header from '../Header/Header'
import { addSong } from '../../actions/index'

import { connect } from 'react-redux'

const URL = 'https://itunes.apple.com/search?term='

class Search extends Component {

  constructor(props){

    super(props)

      this.state = {

        text:'', 
        data:[], // the data received from the itunes API
        musicToAdd: [] // music to pass to the Collection component

      }
    
  }


// runs anytime a character is typed in the search box
searchMusic = (e) =>{
  this.setState({text:e.target.value})
  this.getMusic(this.state.text)
}

getMusic(music){ //get music from itunes API

  return axios.get(`${URL}${music}&media=music&limit=24`)

  .then((res) =>{
      
        this.setState({data:res.data.results})
        // console.log(this.state.data)
  
  })
  .catch((err)=>console.log(err))

}

addToLibrary = (data)=>{ // adds the music to your array in state

    
    this.props.dispatchSong(data)
}

  render() {

    return (

          <div className="search-container"> 

          <Header />

          <input 
                type="text"
                name="search"
                placeholder="search..."
                value={this.state.text}
                onChange={this.searchMusic}/>

    { this.state.text.length !== 0 ? null : <p>Start typing to view music</p> }

                <div className="album-info-container">

                    
                    {this.state.data.map((data, i)=>{ //map over the data

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

                    <button className="add-lib-btn" //adds music info to library
                        onClick={() => this.addToLibrary(data)}>Add to library
                    </button> 

                    </div>

                    </div>

                        )

                    })}

                </div>


                </div>
    );
  }
}

function mapDispatchToProps(dispatch){

  return{

    dispatchSong:(song) => dispatch(addSong(song))
  }
}

export default connect(null, mapDispatchToProps) (Search);
