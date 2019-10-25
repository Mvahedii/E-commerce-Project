import React from 'react'

import './CustomButton.scss'

const CustomButton = ({ children, ...otherPropsData }) => (
    <button className='custom__button' {...otherPropsData}>
        {children}
    </button>
)

export default CustomButton;