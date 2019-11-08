export const addItemsToShoppingBag = (shoppingBagItems, addToShoppingBag) => {
    const existingItem = shoppingBagItems.find(
        shoppingBagItem => shoppingBagItem.id === addToShoppingBag.id);
    if (existingItem) {
        return shoppingBagItems.map(shoppingBagItem =>
            shoppingBagItem.id === addToShoppingBag.id
                ? { ...shoppingBagItem, quantity: shoppingBagItem.quantity + 1 }
                : shoppingBagItem
        )
    }

    return [...shoppingBagItems, { ...addToShoppingBag, quantity: 1 }]
}

export const decreaseQuantityItem = (shoppingBagItems, targetItem) => {
    const existingItem = shoppingBagItems.find(
        shoppingBagItem => shoppingBagItem.id === targetItem.id);
    if (existingItem.quantity === 1) {
        return shoppingBagItems.filter(shoppingBagItem =>
            shoppingBagItem.id !== targetItem.id)
    }

    return shoppingBagItems.map(shoppingBagItem => {
        return (shoppingBagItem.id === targetItem.id
            ? { ...shoppingBagItem, quantity: shoppingBagItem.quantity - 1 }
            : shoppingBagItem)
    }
    )
}