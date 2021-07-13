import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  ConsentManager,
  ConsentManagerConfig,
  ConsentManagerForm,
  PrivacyShield,
} from "@consent-manager/core";

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
    {
      id: "images",
      title: "Images example",
      description: "Hides images till user gives consent.",
      category: "demo",
      Icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function ConsentManagerWrapper() {
  const storage = React.useState({
    decisions: {},
  });

  return (
    <ConsentManager config={consentManagerConfig} store={storage}>
      <ConsentManagerForm />
      <App />
    </ConsentManager>
  );
}

export default ConsentManagerWrapper;
