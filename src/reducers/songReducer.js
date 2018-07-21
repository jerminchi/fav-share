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
                console.log(action.payload)

                return{
                    ...state,
                    data:state.data.concat(action.payload)
                }
            

            case 'DELETE_SONG':
            console.log(action)
            return{
                ...state,
                data:[
                    ...state.items.slice(0, action.payload),
                    ...state.items.slice(action.payload + 1)
                ]
            }

            default:
            return state
}

}