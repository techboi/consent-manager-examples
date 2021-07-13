import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  ConsentManager,
  ConsentManagerConfig,
  ConsentManagerForm,
  PrivacyShield,
} from "@consent-manager/core";

const consentManagerConfig: ConsentManagerConfig = {
  integrations: [
    {
      id: "video-platform",
      title: "Video Inc.",
      category: "social",
      Icon: () => (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      ),
      description: "Video Inc. is a popular service to share clips of cats.",
    },
    {
      id: "integration-with-wrapper",
      title: "Red Box Ltd.",
      category: "statistics",
      Icon: () => (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description:
        "Adds red borders around your content, demonstrates use of components that do e.g. click tracking",
      WrapperComponent: ({ children }) => (
        <div style={{ border: "3px solid red" }}>{children}</div>
      ),
    },
  ],
};

const VideoPlatform: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div
      style={{
        backgroundColor: "darkblue",
        color: "white",
        border: "4px solid black",
        padding: "2em",
      }}
    >
      Video component with id <pre>{id}</pre>
    </div>
  );
};

const App = () => {
  const storage = React.useState({
    decisions: {},
  });

  return (
    <div>
      <ConsentManager config={consentManagerConfig} store={storage}>
        <main style={{ margin: "4em auto", maxWidth: "420px" }}>
          <h1>Your content:</h1>
          <PrivacyShield id="video-platform">
            <VideoPlatform id="rick-roll" />
          </PrivacyShield>
        </main>
        <aside style={{ backgroundColor: "#eee", padding: "1em" }}>
          <ConsentManagerForm />
        </aside>
      </ConsentManager>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
