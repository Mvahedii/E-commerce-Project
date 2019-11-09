import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopDataCollection } from '../../Redux/ShopData/ShopDataSelectors'

import CollectionPreview from '../../Components/Collection/CollectionPreview'

const Shop = ({ collection }) => {

    return (
        <div>
            {collection.map(({ id, ...otherParams }) => (
                <CollectionPreview key={id} {...otherParams} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection: selectShopDataCollection
})

export default connect(mapStateToProps)(Shop);