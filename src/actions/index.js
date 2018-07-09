import { ADD_SONG, DELETE_SONG, SHARE_SONG, GET_ALL_SONGS } from './types'
import { saveMusic, getAllMusic } from '../db/dbHelpers'


export function addSong(name){

    return (dispatch)=>{
        saveMusic()
        dispatch({type:'ADD_SONG', payload:name})
    } 
}

export function getSavedMusic(){

    console.log('getting all saved songs')


    return(dispatch)=>{

       getAllMusic()
        // dispatch({type:GET_ALL_SONGS, payload:res})



    }
}