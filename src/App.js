import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Collection from './components/Collection/Collection'

import axios from 'axios'


const URL = 'https://itunes.apple.com/search?term='

class App extends Component {

  constructor(props){

    super(props)

      this.state = {

        showSearch:false, //the toggle for the header
        text:'', 
        searchVisible:false, //the toggle for the search, results, and button
        data:[], // the data received from the itunes API
        musicToAdd: [] // music to pass to the Collection component

      }
    
  }

  toggleSearch = () =>{ //toggles the header 


    this.setState((prevState)=>({

      searchVisible:!prevState.searchVisible

    }))
  }

  searchVisible = () =>{ //if search isn't visible hide search, results, and button

  
    this.setState((prevState)=>({

        searchVisible:!prevState.searchVisible
  
      }))
}

// runs anytime a character is typed in the search box
searchMusic = (e) =>{
  this.setState({text:e.target.value})
  this.getMusic(this.state.text)
}

getMusic(music){ //get music from itunes API

  return axios.get(`${URL}${music}&media=music&limit=3`)

  .then((res) =>{
      
        this.setState({data:res.data.results})
        console.log(this.state.data)
  
  })
  .catch((err)=>console.log(err))

}

addToLibrary = (music)=>{ // adds the music to your array in state
    console.log(music.artistId)
    
    
   this.setState(prevState => ({
   
    musicToAdd:[...prevState.musicToAdd, music] 
   }))
   console.log(this.state.musicToAdd)
}

  

  render() {
    return (
      <div className="container">
      

      <div className="header">

        <Header
        onClick={this.toggleSearch} />
      
      </div>

          <div className={this.state.searchVisible ? "search-container" : "search-hidden"}> 

          <input 
                type="text"
                name="search"
                placeholder="search..."
                value={this.state.text}
                onChange={this.searchMusic}/> 

                <div className="album-info-container">

                    
                    {this.state.data.map((data, i)=>{ //map over the data


                        return(

                    <div className="album-info-row"
                         key={i}>
                    <img src={data.artworkUrl100}
                    alt="Album art"
                    className="placeholder"/>


                    <div className="album-info">
                    <p>Album: {data.collectionName}</p>
                    <p>Artist: {data.artistName}</p>
                    <p>Year: {data.releaseDate.slice(0,4)}</p>

                    </div>

                    <button className="add-lib-btn" //adds music info to library
                        onClick={() =>this.addToLibrary(data)}>
                    <i className="fa fa-3x fa-plus-circle"></i></button> 

                    </div>
                        )


                    })}

                </div>

                <button 
                onClick={this.searchVisible}
                className="done-btn">Done</button>

                </div>

                <div className="library">

                <Collection 
                  music={this.state.musicToAdd}/>

              </div>

      </div>
    );
  }
}

export default App;
