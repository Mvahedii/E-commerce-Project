import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleShoppingBagDropdown } from '../../Redux/ShoppingBagDropdown/ShoppingBagDropdownActions'
import { ReactComponent as ShoppingBagIcon } from '../../assets/11.1 shopping-bag.svg.svg'
import { selectShoppingBagDropdownItemsCount } from '../../Redux/ShoppingBagDropdown/ShoppingBagDropdownSelectors'

import './ShoppingBag.scss'

const ShoppingBag = ({ toggleShoppingBagDropdown, itemsCount }) => (
    <div className='cart__icon' onClick={toggleShoppingBagDropdown}>
        <ShoppingBagIcon className='shopping__icon' />
        <span className='item__count'>{itemsCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        itemsCount: selectShoppingBagDropdownItemsCount
    }
)

const mapDispatchToProps = dispatch => ({
    toggleShoppingBagDropdown: () => dispatch(toggleShoppingBagDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);