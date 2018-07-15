import { SIGNED_IN, SIGNED_OUT } from '../actions/types'

const initialState = { 
	user:null, 
}

export default function UserReducer(state = initialState, action){

    switch(action.type){


        case 'SIGNED_IN':
            console.log(action.payload)

                return {
                   ...state,
                   user: action.payload

                }


            case 'SIGNED_OUT':
                console.log(action)

                return action.payload
                
            

            default:
            return state
}

}