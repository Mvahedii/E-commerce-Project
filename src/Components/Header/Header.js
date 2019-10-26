import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../Firebase/Firebase'

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'
import './Header.scss';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo__container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'> SHOP </Link>
                <Link className='option' to='/contact'> CONTACT </Link>
                {
                    currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    )
                        : (

                            <Link className='option' to='/sign-in'>SIGN IN</Link>
                        )
                }
            </div>
        </div>
    )
}

export default Header;