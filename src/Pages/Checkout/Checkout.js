import React from 'react'

import { connect } from 'react-redux'

import CheckoutItems from '../../Components/CheckoutItems/CheckoutItems'

import { createStructuredSelector } from 'reselect'

import { selectShoppingBagDropdownItems, selectShoppingBagTotal } from '../../Redux/ShoppingBagDropdown/ShoppingBagDropdownSelectors'

import './Checkout.scss'

const Checkout = ({ shoppingBagDropdownItems, shoppingBagTotal }) => (
    <div className='checkout__page'>
        <div className='checkout__header'>
            <div className='header__block'>
                <span>Product</span>
            </div>
            <div className='header__block'>
                <span>Description</span>
            </div>
            <div className='header__block'>
                <span>Quantity</span>
            </div>
            <div className='header__block'>
                <span>Price</span>
            </div>
            <div className='header__block'>
                <span>Remove</span>
            </div>
        </div>
        {
            shoppingBagDropdownItems.map(shoppingBagDropdownItem =>
                <CheckoutItems
                    key={shoppingBagDropdownItem.id}
                    shoppingBagDropdownItem={shoppingBagDropdownItem}
                />
            )
        }
        <div className='total'>
            <span>TOTAL : ${shoppingBagTotal}</span>
        </div>
    </div>
)

const mapSatteToProps = createStructuredSelector({
    shoppingBagDropdownItems: selectShoppingBagDropdownItems,
    shoppingBagTotal: selectShoppingBagTotal
})

export default connect(mapSatteToProps)(Checkout);