import ShoppingBagDropdownActionTypes from './ShoppingBagDropdownActionTypes'

export const toggleShoppingBagDropdown = () => ({
    type: ShoppingBagDropdownActionTypes.TOGGLE_SHOPPINGBAG_HIDDEN
})

export const addToShoppingBag = item => ({
    type: ShoppingBagDropdownActionTypes.ADD_TO_SHOPPINGBAG,
    payload: item
})