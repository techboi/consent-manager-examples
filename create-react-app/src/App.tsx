import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrivacyManager, PrivacyManagerConfig, PrivacyManagerForm, PrivacyShield } from '@techboi/privacy-manager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrivacyShield id="images">
          <img src={logo} className="App-logo" alt="logo" />
        </PrivacyShield>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const privacyManagerConfig: PrivacyManagerConfig = {
  integrations: [
    { id: 'images' },
    {
      id: 'integration-with-wrapper',
      wrapperComponent: ({ children }) => (
        <div style={{ border: '3px solid red' }}>{children}</div>
      ),
    },
  ],
};


function PrivacyManagerWrapper() {
  const storage = React.useState({
    decisions: {},
  });

  return (
    <PrivacyManager
      config={privacyManagerConfig}
      store={storage}
    >
      <PrivacyManagerForm />
      <App />
    </PrivacyManager>
  )
}


export default PrivacyManagerWrapper;
