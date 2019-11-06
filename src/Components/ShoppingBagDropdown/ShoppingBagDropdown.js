import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import ShoppingBagDropdownItems from '../ShoppingBagDropdownItems/ShoppingBagDropdownItems'
import CustomButton from '../CustomButton/CustomButton'
import { selectShoppingBagDropdownItems } from '../../Redux/ShoppingBagDropdown/ShoppingBagDropdownSelectors'

import './ShoppingBagDropdown.scss'

const ShoppingBagDropdown = ({ shoppingBagDropdownItems, history }) => (
    <div className='dropdown'>
        <div className='items'>
            {
                shoppingBagDropdownItems.length ? (
                    shoppingBagDropdownItems.map(shoppingBagDropdownItem => (
                        <ShoppingBagDropdownItems
                            key={shoppingBagDropdownItem.id}
                            item={shoppingBagDropdownItem}
                        />
                    ))) : (
                        <span className='empty__message'>Your Cart is Empty</span>
                    )
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    shoppingBagDropdownItems: selectShoppingBagDropdownItems
})

export default withRouter(connect(mapStateToProps)(ShoppingBagDropdown));