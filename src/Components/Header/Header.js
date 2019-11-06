import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../../Firebase/Firebase'
import { createStructuredSelector } from 'reselect'

import ShoppingBag from '../ShoppingBag/ShoppingBag'
import ShoppingBagDropdown from '../ShoppingBagDropdown/ShoppingBagDropdown'
import { selectShoppingBagDropdownHidden } from '../../Redux/ShoppingBagDropdown/ShoppingBagDropdownSelectors'
import { selectCurrentUser } from '../../Redux/User/UserSelectors'
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectShoppingBagDropdownHidden
})

export default connect(mapStateToProps)(Header);