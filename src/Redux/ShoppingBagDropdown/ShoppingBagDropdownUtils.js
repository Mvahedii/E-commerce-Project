export const addItemsToShoppingBag = (shoppingBagItems, addToShoppingBag) => {
    const existingItem = shoppingBagItems.find(shoppingBagItem =>
        shoppingBagItem.id === addToShoppingBag.id
    )
    if (existingItem) {
        return shoppingBagItems.map(shoppingBagItem =>
            shoppingBagItem.id === addToShoppingBag.id ?
                { ...shoppingBagItem, quantity: shoppingBagItem.quantity + 1 } :
                shoppingBagItem
        )
    }
    else {
        return [...shoppingBagItems, { addToShoppingBag, quantity: 1 }]
    }
}

