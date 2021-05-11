import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './page/homepage/homepage';
import ShopPage from './page/shop/shop';
import Header from './components/header-component/header';
import SignInAndSignUpPage from './page/sign-in-up/sign-in-up';
import { auth } from './firebase/firebase.util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
