import { createSelector } from 'reselect'

const selectShoppingBagDropdown = state => state.shoppingBagDropdown

export const selectShoppingBagDropdownItems = createSelector(
    [selectShoppingBagDropdown],
    shoppingBagDropdown => shoppingBagDropdown.shoppingBagDropdownItems
)

export const selectShoppingBagDropdownItemsCount = createSelector(
    [selectShoppingBagDropdownItems],
    shoppingBagDropdownItems =>
        shoppingBagDropdownItems.reduce(
            (accumalatedQuantity, shoppingBagDropdownItem) =>
                accumalatedQuantity + shoppingBagDropdownItem.quantity,
            0
        )
);