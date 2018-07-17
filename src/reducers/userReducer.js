const initialState = { 
	fireUser:null, 
}

export default function userReducer(state = initialState, action){

    switch(action.type){


        case 'SIGNED_IN':
           

                return {
                   ...state,
                   fireUser: action.payload

                }

            

            default:
            return state
}


}