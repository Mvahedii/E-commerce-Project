import { createSelector } from 'reselect'

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShopData = state => state.shopData

export const selectShopDataCollection = createSelector(
    [selectShopData],
    shopData => shopData.collection
)

export const selectCollectionForPreview = createSelector(
    [selectShopDataCollection],
    collection => Object.keys(collection).map(key => collection[key])
)

// export const selectCollection = collectionParams => createSelector(
//     [selectShopDataCollection],
//     collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionParams])
// )

export const selectCollection = collectionParams => createSelector(
    [selectShopDataCollection],
    collection => collection[collectionParams]
)