import { combineReducers } from 'redux'

import songReducer from './songReducer'
import UserReducer from './userReducer';

const rootReducer = combineReducers({
   
    songs: songReducer,
    user: UserReducer
  });

  export default rootReducer;