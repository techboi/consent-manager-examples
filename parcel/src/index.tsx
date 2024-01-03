import * as React from "react";
import * as ReactDOM from "react-dom";

import { PrivacyShield } from "@consent-manager/core";
import { ConsentManagerWrapper } from "./consent-manager";

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
  return (
    <ConsentManagerWrapper>
      <h1>Your content:</h1>
      <PrivacyShield id="video-platform">
        <VideoPlatform id="rick-roll" />
      </PrivacyShield>
    </ConsentManagerWrapper>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
