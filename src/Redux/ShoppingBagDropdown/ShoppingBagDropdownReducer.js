import ShoppingBagDropdownActionTypes from './ShoppingBagDropdownActionTypes'

const INITIAL_STATE = {
    hidden: true
}

const ShoppingBagDropdownReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShoppingBagDropdownActionTypes.TOGGLE_SHOPPINGBAG_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default ShoppingBagDropdownReducer;