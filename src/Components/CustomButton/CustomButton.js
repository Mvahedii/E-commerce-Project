import React from 'react'

import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSingIn, ...otherPropsData }) => (
    <button
        className={`${isGoogleSingIn ? 'google__sign__in' : ''} custom__button`}
        {...otherPropsData}>
        {children}
    </button>
)

export default CustomButton;