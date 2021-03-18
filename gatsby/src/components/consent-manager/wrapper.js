import React from "react"

import { ConsentManager, ConsentManagerForm } from "@consent-manager/core"
import createPersistedState from "use-persisted-state"

import { matomoIntegration } from "@consent-manager/integration-matomo"
import { youtubeIntegration } from "@consent-manager/integration-youtube"

import { UnobtrusiveConsentControlUI } from "@consent-manager/interface-default"
import "@consent-manager/interface-default/dist/default.min.css"

import { FallbackComponent } from "./tailwind-fallback-component"

const useConsentStateStore = createPersistedState(
  "consent-manager-gatsby-example"
)

const consentManagerConfig = {
  integrations: [
    matomoIntegration({
      matomoURL: process.env.GATSBY_MATOMO_URL,
      siteID: process.env.GATSBY_MATOMO_SITE_ID,
    }),
    youtubeIntegration(),
    {
      id: "images",
      title: "Gatsby Image",
      category: "social",
      description: "You didn't consent to loading images of Gatsby.",
      Icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 28 28"
          {...props}
        >
          <circle cx="14" cy="14" r="14" fill="#639" />
          <path
            d="M6 22c-2-2-3-5-3-8l11 11c-3 0-6-1-8-3zM16 25L3 12a11 11 0 0120-4l-2 1c-1-2-4-4-7-4-4 0-7 3-8 6l11 12c3-1 5-4 6-7h-5v-2h7c0 5-4 10-9 11z"
            fill="#fff"
          />
        </svg>
      ),
      privacyPolicyUrl: "https://gdpr.eu/what-is-gdpr/",
    },
  ],
}

export function ConsentManagerWrapper({ children }) {
  const storage = useConsentStateStore()

  return (
    <ConsentManager
      config={consentManagerConfig}
      store={storage}
      fallbackComponent={FallbackComponent}
    >
      {children}
      <ConsentManagerForm formComponent={UnobtrusiveConsentControlUI} />
    </ConsentManager>
  )
}
