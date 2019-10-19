import React from 'react'
import { withRouter } from 'react-router-dom'

import './MenuItem.scss'

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu__item`}>
            <div
                className='background__image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>

    )
}

export default withRouter(MenuItem);