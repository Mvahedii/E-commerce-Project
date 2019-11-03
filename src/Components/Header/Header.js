import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../../Firebase/Firebase'

import ShoppingBag from '../ShoppingBag/ShoppingBag'
import ShoppingBagDropdown from '../ShoppingBagDropdown/ShoppingBagDropdown'
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'
import './Header.scss';

const Header = ({ currentUser, hidden }) => {
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
                <ShoppingBag />
            </div>
            {
                hidden ? null : <ShoppingBagDropdown />
            }
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, shoppingBagDropdown: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);