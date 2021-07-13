import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import { ConsentManagerWrapper } from "../components/consent-manager";
import { getMatomoTracker } from "@consent-manager/integration-matomo";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { trackPageViewSPA } = getMatomoTracker();
  const [prevLocation, setPrevLocation] = useState(
    typeof window !== "undefined" ? window.location : undefined
  );

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const { location } = window;
      trackPageViewSPA({ location, prevLocation });
      setPrevLocation(location);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [prevLocation, router.events, trackPageViewSPA]);

  return (
    <ConsentManagerWrapper>
      <Component {...pageProps} />
    </ConsentManagerWrapper>
  );
}

export default MyApp;
