import { createSelector } from 'reselect'

const selectShoppingBagDropdown = state => state.shoppingBagDropdown

export const selectShoppingBagDropdownItems = createSelector(
    [selectShoppingBagDropdown],
    shoppingBagDropdown => shoppingBagDropdown.shoppingBagDropdownItems
);

export const selectShoppingBagDropdownHidden = createSelector(
    [selectShoppingBagDropdown],
    shoppingBagDropdown => shoppingBagDropdown.hidden
);

export const selectShoppingBagDropdownItemsCount = createSelector(
    [selectShoppingBagDropdownItems],
    shoppingBagDropdownItems =>
        shoppingBagDropdownItems.reduce(
            (accumalatedQuantity, shoppingBagDropdownItem) =>
                accumalatedQuantity + shoppingBagDropdownItem.quantity,
            0
        )
);

export const selectShoppingBagTotal = createSelector(
    [selectShoppingBagDropdownItems],
    shoppingBagDropdownItems =>
        shoppingBagDropdownItems.reduce(
            (accumalatedQuantity, shoppingBagDropdownItem) =>
                accumalatedQuantity + shoppingBagDropdownItem.quantity * shoppingBagDropdownItem.price,
            0
        )
)