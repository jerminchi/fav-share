const initialState = { 
	data:[], 
	error: false
}

export default function songReducer(state = initialState, action){

    switch(action.type){


        case 'ADD_SONG':
            console.log(action)
            
            return{
                ...state,
                data:state.data.concat(action.payload)
                
            }

            case 'GET_ALL_SONGS':

                return{
                    ...state,
                    data:action.payload
                }
            

            case 'DELETE_SONG':
            console.log(action)
            return{
                ...state,
                data:action.payload
            }

            default:
            return state
}

}