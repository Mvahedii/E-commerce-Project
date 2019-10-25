import React from 'react'

import './FormInput.scss'

const FormInput = ({ handleChange, label, ...otherDataProps }) => (
    <div className='group'>
        <input
            className='form__input'
            onChange={handleChange}
            {...otherDataProps} />
        {
            label ? (
                <label
                    className={`${
                        otherDataProps.value.length ? 'shrink' : ''
                        }form__input__label`}
                >
                    {label}
                </label>
            )
                : null
        }
    </div>
)

export default FormInput;