import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../Redux/ShopData/ShopDataSelectors'

const Collection = ({ collection }) => {
    console.log(collection)
    return (
        <div>
            <h1>Collection Page</h1>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);