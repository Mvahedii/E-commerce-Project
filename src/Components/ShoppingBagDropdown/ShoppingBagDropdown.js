import React from 'react'

import CustomButton from '../CustomButton/CustomButton'

import './ShoppingBagDropdown.scss'

const ShoppingBagDropdown = () => (
    <div className='dropdown'>
        <div className='items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default ShoppingBagDropdown;