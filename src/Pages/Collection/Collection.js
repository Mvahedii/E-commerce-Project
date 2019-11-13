import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../Components/CollectionItem/CollectionItem'

import { selectCollection } from '../../Redux/ShopData/ShopDataSelectors'

import './Collection.scss'

const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection__page'>
            <h1 className='title'>{title}</h1>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);