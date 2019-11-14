import { combineReducers } from 'redux'

import UserReducer from './User/UserReducer'
import ShoppingBagDropdownReducer from './ShoppingBagDropdown/ShoppingBagDropdownReducer'
import DirectoryReducer from './Directory/DirectoryReducer'
import ShopDataReducer from './ShopData/ShopDataReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    shoppingBagDropdown: ShoppingBagDropdownReducer,
    shopData: ShopDataReducer,
    directory: DirectoryReducer
})

export default rootReducer;