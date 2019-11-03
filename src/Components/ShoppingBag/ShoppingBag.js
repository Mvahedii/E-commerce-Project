import React from 'react'
import { connect } from 'react-redux'

import { toggleShoppingBagDropdown } from '../../Redux/ShoppingBagDropdown/ShoppingBagDropdownActions'
import { ReactComponent as ShoppingBagIcon } from '../../assets/11.1 shopping-bag.svg.svg'

import './ShoppingBag.scss'

const ShoppingBag = ({ toggleShoppingBagDropdown }) => (
    <div className='cart__icon' onClick={toggleShoppingBagDropdown}>
        <ShoppingBagIcon className='shopping__icon' />
        <span className='item__count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleShoppingBagDropdown: () => dispatch(toggleShoppingBagDropdown())
})

export default connect(null, mapDispatchToProps)(ShoppingBag);