import React from 'react'

import CustomButton from '../CustomButton/CustomButton'

import './CollectionItem.scss'

const CollectionItem = ({ name, imageUrl, price }) => {

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
            <CustomButton className='custom__button' inverted>Add to Cart</CustomButton>
        </div>
    )

}

export default CollectionItem;