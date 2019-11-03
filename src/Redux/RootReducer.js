import { combineReducers } from 'redux'

import UserReducer from './User/UserReducer'
import ShoppingBagDropdownReducer from './ShoppingBagDropdown/ShoppingBagDropdownReducer'

export default combineReducers({
    user: UserReducer,
    shoppingBagDropdown: ShoppingBagDropdownReducer
})