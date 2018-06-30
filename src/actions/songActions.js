import { ADD_SONG, DELETE_SONG, SHARE_SONG } from './types'

export function addSong(name){

    return (dispatch)=>{

        dispatch({type:'ADD_SONG', payload:name})
    }
    
}