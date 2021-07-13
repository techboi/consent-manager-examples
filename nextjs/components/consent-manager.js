/**
 * This file integrates consent-manager to protect our visitors privacy
 * and supports us to align with GDPR and CCPA.
 *
 * Learn more: https://github.com/hashbite/consent-manager
 */

import React from "react";

import createPersistedState from "use-persisted-state";

import { matomoPrivacyAwareIntegration } from "@consent-manager/integration-matomo";

import { ConsentManagerDefaultInterface } from "@consent-manager/interface-default";
import "@consent-manager/interface-default/dist/default.min.css";

const useConsentStateStore = createPersistedState("consent-manager-docs");

const consentManagerConfig = {
  integrations: [
    matomoPrivacyAwareIntegration({
      matomoURL: "https://statistics.hashbite.net/",
      siteID: "16",
    }),
  ],
};
/**
 * Wraps the apps root element with consent-manager
 * See:
 * * https://github.com/hashbite/consent-manager
 * * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement
 */
export const ConsentManagerWrapper = ({ children }) => {
  const storage = useConsentStateStore();

  return (
    <ConsentManagerDefaultInterface
      config={consentManagerConfig}
      store={storage}
    >
      {children}
    </ConsentManagerDefaultInterface>
  );
};
