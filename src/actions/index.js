import { ADD_SONG, DELETE_SONG, SHARE_SONG, GET_ALL_SONGS, SIGNED_IN, SIGNED_OUT } from './types'
import { saveMusic, getAllMusic, signIn } from '../db/dbHelpers'


export function addSong(name){

    return (dispatch)=>{
        saveMusic(name)
        dispatch({type:'ADD_SONG', payload:name})
    } 
}

export function getSavedMusic(user){

    console.log('getting all saved songs')
    console.log(user)

    return(dispatch)=>{

        getAllMusic()

        .then(querySnap=> dispatch({type:GET_ALL_SONGS, payload:querySnap}))
            // querySnap.docs.map((doc => doc.data().data)) 
            
        .catch(function(error) {
            console.log("Error getting documents:", error);
        });


    }
}

export function signUserIn(email, password){

    console.log('signing in')

    return(dispatch)=>{

       
        signIn(email, password)
        .then(res => {
            
            localStorage.setItem('userData', JSON.stringify(res))
             //save user info to localstorage
    
        /* Be sure to delete user info on signOut*/
            dispatch({type:SIGNED_IN,payload:res})
    
         })
        
        .catch(err => console.log('Error fetching user'))
    }
}