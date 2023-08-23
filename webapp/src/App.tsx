import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginForm from './LoginForm';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

const App = () => {
  const onSubmitUsername = (username: string, password: string) => alert(`You entered: ${username} and password ${password}`);

  return (
    <div>
      <div style={{ minWidth: 400 }}>
        <LoginForm onSubmit={onSubmitUsername} />
      </div>
    </div>
  );
};

export default App;
