import { combineReducers } from 'redux'

import UserReducer from './User/UserReducer'

export default combineReducers({
    user: UserReducer
})