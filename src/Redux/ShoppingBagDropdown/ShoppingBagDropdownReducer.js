import ShoppingBagDropdownActionTypes from './ShoppingBagDropdownActionTypes'

const INITIAL_STATE = {
    hidden: true,
    shoppingBagDropdownItems: []
}

const ShoppingBagDropdownReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShoppingBagDropdownActionTypes.TOGGLE_SHOPPINGBAG_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ShoppingBagDropdownActionTypes.ADD_TO_SHOPPINGBAG:
            return {
                ...state,
                shoppingBagDropdownItems: [...state.shoppingBagDropdownItems, action.payload]
            }
        default:
            return state;
    }
}

export default ShoppingBagDropdownReducer;