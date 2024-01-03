import React from "react";
import type { AppProps } from "next/app";

import { ConsentManagerWrapper } from "../components/consent-manager";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConsentManagerWrapper>
      <Component {...pageProps} />
    </ConsentManagerWrapper>
  );
}

export default MyApp;
