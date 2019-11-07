import React from 'react'
import { connect } from 'react-redux'

import { removeItemFromShoppingBag } from '../../Redux/ShoppingBagDropdown/ShoppingBagDropdownActions'

import './CheckoutItems.scss'

const CheckoutItems = ({ shoppingBagDropdownItem, removeItemFromShoppingBag }) => {

    const { name, price, imageUrl, quantity } = shoppingBagDropdownItem

    return (
        <div className='checkout__item'>
            <div className='image__container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove__button'>
                <div
                    className='remove__button'
                    onClick={() => removeItemFromShoppingBag(shoppingBagDropdownItem)}>
                    &#10006;
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromShoppingBag: item => dispatch(removeItemFromShoppingBag(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItems);