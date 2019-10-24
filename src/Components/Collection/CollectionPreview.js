import React from 'react'

import './CollectionPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

const CollectionPreview = ({ title, items }) => {
    return (
        <div>
            <div className='collection__preview'>
                <div className='title'>{title.toUpperCase()}</div>
                <div className='preview'>
                    {
                        items
                            .filter((item, index) => (index < 4))
                            .map(({ id, ...otherPropsData }) => {
                                return (
                                    <CollectionItem key={id} {...otherPropsData} />
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionPreview;