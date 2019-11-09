import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistore } from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));