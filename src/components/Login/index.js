import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../../firebase/firebase';

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" />
        <h1>Sign in to Jaber Company</h1>
        <p>jaber.company.com</p>
        <Button type="submit" onClick={signIn}>
          Sign in width google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: var(--slack-color);
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  background-color: #1a1d21;
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > h1 {
    color: white;
    font-weight: 500;
    font-size: 15px;
  }

  > p {
    color: white;
    font-size: 13px;
    color: #ababad;
  }

  > button {
    margin-top: 40px;
    background-color: #0a8d48;
    text-transform: inherit !important;
    color: white;
    font-weight: 300;
    font-size: 12px;
    width: 140px;
  }
`;
