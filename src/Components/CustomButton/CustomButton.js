import React from 'react'

import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSingIn, inverted, ...otherPropsData }) => (
    <button
        className={`
        ${inverted ? 'inverted' : ''}
        ${isGoogleSingIn ? 'google__sign__in' : ''} custom__button`}
        {...otherPropsData}>
        {children}
    </button>
)

export default CustomButton;