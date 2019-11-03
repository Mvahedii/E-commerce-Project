import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './Components/Header/Header'
import HomePage from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import SingInandSignUp from './Pages/SingInandSignUp/SingInandSignUp'
import { auth, createUserProfileDocument } from './Firebase/Firebase'
import { setCurrentUser } from './Redux/User/UserAction'

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/sign-in' component={SingInandSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
