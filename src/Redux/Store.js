import { createStore, applyMiddleware } from 'redux'
import { persistReducer, createMigrate, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './RootReducer'

const migration = {
    0: state => {
        return {
            state
        }
    }
}


const persistConfig = {
    key: 'root',
    version: 0,
    storage,
    debug: true,
    whileList: ['shoppingBagDropdown'],
    migrate: createMigrate(migration, { debug: true })
}


const middleware = [logger]

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store)