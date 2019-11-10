import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from './User/UserReducer'
import ShoppingBagDropdownReducer from './ShoppingBagDropdown/ShoppingBagDropdownReducer'
import DirectoryReducer from './Directory/DirectoryReducer'
import ShopDataReducer from './ShopData/ShopDataReducer'

const persistConfig = {
    key: 'root',
    storage,
    whileList: ['shoppingBagDropdown']
}


const rootReducer = combineReducers({
    user: UserReducer,
    shoppingBagDropdown: ShoppingBagDropdownReducer,
    shopData: ShopDataReducer,
    directory: DirectoryReducer
})

export default persistReducer(persistConfig, rootReducer)