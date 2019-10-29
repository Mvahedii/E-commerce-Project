import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './Components/Header/Header'
import HomePage from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import SingInandSignUp from './Pages/SingInandSignUp/SingInandSignUp'
import { auth, createUserProfileDocument } from './Firebase/Firebase'

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/sign-in' component={SingInandSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
