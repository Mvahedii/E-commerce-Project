import React from 'react'

import CollectionPreview from '../../Components/Collection/CollectionPreview'
import SHOP_DATA from './ShopData'

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const { collection } = this.state
        return (
            <div>
                {collection.map(({ id, ...otherParams }) => (
                    <CollectionPreview key={id} {...otherParams} />
                ))}
            </div>
        )
    }
}

export default Shop;