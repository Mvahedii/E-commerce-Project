import React from 'react';

import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'
import './SingInandSignUp.scss'

const SingInandSignUp = () => {

    return (
        <div className='sign__in__and__sign__up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SingInandSignUp;