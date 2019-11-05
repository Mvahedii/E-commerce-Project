import React from 'react'
import { connect } from 'react-redux'

import ShoppingBagDropdownItems from '../ShoppingBagDropdownItems/ShoppingBagDropdownItems'
import CustomButton from '../CustomButton/CustomButton'

import './ShoppingBagDropdown.scss'

const ShoppingBagDropdown = ({ shoppingBagDropdownItems }) => (
    <div className='dropdown'>
        <div className='items'>
            {
                shoppingBagDropdownItems.map(shoppingBagDropdownItem => (
                    <ShoppingBagDropdownItems
                        key={shoppingBagDropdownItem.id}
                        item={shoppingBagDropdownItem}
                    />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ shoppingBagDropdown: { shoppingBagDropdownItems } }) => ({
    shoppingBagDropdownItems,
})

export default connect(mapStateToProps)(ShoppingBagDropdown);