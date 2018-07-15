import { ADD_SONG, DELETE_SONG, SHARE_SONG, GET_ALL_SONGS, SIGNED_IN, SIGNED_OUT } from './types'
import { saveMusic, getAllMusic, getUser } from '../db/dbHelpers'


export function addSong(name){

    return (dispatch)=>{
        saveMusic(name)
        dispatch({type:'ADD_SONG', payload:name})
    } 
}

export function getSavedMusic(){

    console.log('getting all saved songs')


    return(dispatch)=>{

        getAllMusic()

        .then(querySnap=> dispatch({type:GET_ALL_SONGS, payload:querySnap}))
            // querySnap.docs.map((doc => doc.data().data)) 
            
        .catch(function(error) {
            console.log("Error getting documents:", error);
        });


    }
}

export function signUserIn(){

    console.log('signing in')

    return(dispatch)=>{

        getUser()

        .then(res => dispatch({type:SIGNED_IN, payload:res}))
        
        .catch(err=>console.log('Error fetching user'))
    }
}