import React from 'react'
import { connect } from 'react-redux'

import { selectShopDataCollection } from '../../Redux/ShopData/ShopDataSelectors'

import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../../Components/Collection/CollectionPreview'

import './CollectionOverview.scss'

const CollectionOverview = ({ collections }) => (
    <div className='collections__overview'>
        {
            collections.map(({ id, ...otherParams }) => (
                <CollectionPreview key={id} {...otherParams} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopDataCollection,
})


export default connect(mapStateToProps)(CollectionOverview);
