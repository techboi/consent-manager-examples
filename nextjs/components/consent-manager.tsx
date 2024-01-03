/**
 * This file integrates consent-manager to protect our visitors privacy
 * and supports us to align with GDPR and CCPA.
 *
 * Learn more: https://github.com/hashbite/consent-manager
 */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  matomoPrivacyAwareIntegration,
  getMatomoTracker,
} from "@consent-manager/integration-matomo";

import { ConsentManagerDefaultInterface } from "@consent-manager/interface-default";
import "@consent-manager/interface-default/dist/default.min.css";

import createPersistedState from "use-persisted-state";
import { ConsentManagerStorageState } from "@consent-manager/core";

// We store our consent information in localStorage
const useConsentStateStore = createPersistedState<ConsentManagerStorageState>("consent-manager");

const consentManagerConfig = {
  integrations: [
    matomoPrivacyAwareIntegration({
      matomoURL: "https://statistics.hashbite.net/",
      siteID: "16",
    }),
  ],
};

export const ConsentManagerWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const storage = useConsentStateStore();

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
    <ConsentManagerDefaultInterface
      config={consentManagerConfig}
      store={storage}
    >
      {children}
    </ConsentManagerDefaultInterface>
  );
};
