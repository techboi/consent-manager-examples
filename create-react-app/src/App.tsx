import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConsentManager, ConsentManagerConfig, ConsentManagerForm, PrivacyShield } from '@techboi/consent-manager';

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

const consentManagerConfig: ConsentManagerConfig = {
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


function ConsentManagerWrapper() {
  const storage = React.useState({
    decisions: {},
  });

  return (
    <ConsentManager
      config={consentManagerConfig}
      store={storage}
    >
      <ConsentManagerForm />
      <App />
    </ConsentManager>
  )
}


export default ConsentManagerWrapper;
