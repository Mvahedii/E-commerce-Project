import React from 'react'

import { ReactComponent as ShoppingBagIcon } from '../../assets/11.1 shopping-bag.svg.svg'

import './ShoppingBag.scss'

const ShoppingBag = () => (
    <div className='cart__icon'>
        <ShoppingBagIcon className='shopping__icon' />
        <span className='item__count'>0</span>
    </div>
)

export default ShoppingBag;