import React from 'react'

import './CollectionPreview.scss'

const CollectionPreview = ({ title, items }) => {
    return (
        <div>
            <div className='collection__preview'>
                <div className='title'>{title}</div>
                <div className='preview'>
                    {
                        items
                            .filter((item, index) => (index < 4))
                            .map(item => {
                                return (
                                    <h1 key={item.id}>{item.name}</h1>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionPreview;