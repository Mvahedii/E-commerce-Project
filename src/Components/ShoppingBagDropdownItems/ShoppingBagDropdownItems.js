import React from 'react';

import './ShoppingBagDropdownItems.scss';

const ShoppingBagDropdownItems = ({ item: { name, price, imageUrl, quantity } }) => (
    <div className='ShoppingBag__item'>
        <img src={imageUrl} alt='item' />
        <div className='item__details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)

export default ShoppingBagDropdownItems;