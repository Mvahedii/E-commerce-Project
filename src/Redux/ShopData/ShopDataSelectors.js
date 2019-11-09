import { createSelector } from 'reselect'

const selectShopData = state => state.shopData

export const selectShopDataCollection = createSelector(
    [selectShopData],
    shopData => shopData.collection
)