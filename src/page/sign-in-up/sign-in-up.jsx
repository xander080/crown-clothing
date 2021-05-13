import React from 'react';

import './sing-in-up.scss';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sing-up/sign-up';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
