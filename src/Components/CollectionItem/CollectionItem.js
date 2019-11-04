import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton'
import { addToShoppingBag } from '../../Redux/ShoppingBagDropdown/ShoppingBagDropdownActions'

import './CollectionItem.scss'

const CollectionItem = ({ item, addToShoppingBag }) => {

    const { name, price, imageUrl } = item

    return (
        <div className='collection__item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection__footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton
                onClick={() => addToShoppingBag(item)}
                className='custom__button'
                inverted>Add to Cart</CustomButton>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    addToShoppingBag: item => dispatch(addToShoppingBag(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);