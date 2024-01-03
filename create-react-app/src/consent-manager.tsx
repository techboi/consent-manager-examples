/**
 * This file integrates consent-manager to protect our visitors privacy
 * and supports us to align with GDPR and CCPA.
 *
 * Learn more: https://github.com/hashbite/consent-manager
 */
import React from "react";
import {
  ConsentManager,
  ConsentManagerConfig,
  ConsentManagerForm,
  ConsentManagerStorageState,
} from "@consent-manager/core";

import createPersistedState from "use-persisted-state";

// We store our consent information in localStorage
const useConsentStateStore =
  createPersistedState<ConsentManagerStorageState>("consent-manager");

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

export const ConsentManagerWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storage = useConsentStateStore();

  return (
    <ConsentManager config={consentManagerConfig} store={storage}>
      {children}
      <ConsentManagerForm />
    </ConsentManager>
  );
};
