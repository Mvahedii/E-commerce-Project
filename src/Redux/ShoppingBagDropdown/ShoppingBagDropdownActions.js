import ShoppingBagDropdownActionTypes from './ShoppingBagDropdownActionTypes'

export const toggleShoppingBagDropdown = () => ({
    type: ShoppingBagDropdownActionTypes.TOGGLE_SHOPPINGBAG_HIDDEN
})

export const addToShoppingBag = item => ({
    type: ShoppingBagDropdownActionTypes.ADD_TO_SHOPPINGBAG,
    payload: item
})

export const removeItemFromShoppingBag = item => ({
    type: ShoppingBagDropdownActionTypes.REMOVE_ITEM_FROM_SHOPPINGBAG,
    payload: item
})