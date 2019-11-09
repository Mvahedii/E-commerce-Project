import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from './User/UserReducer'
import ShoppingBagDropdownReducer from './ShoppingBagDropdown/ShoppingBagDropdownReducer'

const persistConfig = {
    key: 'root',
    storage,
    whileList: ['shoppingBagDropdown']
}


const rootReducer = combineReducers({
    user: UserReducer,
    shoppingBagDropdown: ShoppingBagDropdownReducer
})

export default persistReducer(persistConfig, rootReducer)