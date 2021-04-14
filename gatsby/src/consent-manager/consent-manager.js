/**
 * This file integrates consent-manager to protect our visitors privacy
 * and supports us to align with GDPR and CCPA.
 *
 * Learn more: https://github.com/techboi/consent-manager
 */

import React from "react"

import { ConsentManager, ConsentManagerForm } from "@consent-manager/core"
import createPersistedState from "use-persisted-state"

import {
  matomoIntegration,
  getMatomoTracker,
} from "@consent-manager/integration-matomo"

import { InterfaceDefault } from "@consent-manager/interface-default"
import "@consent-manager/interface-default/dist/default.min.css"

import { Switch } from "./tailwind-switch"
import { FallbackComponent } from "./tailwind-fallback-component"

const useConsentStateStore = createPersistedState("consent-manager")

const consentManagerConfig = {
  integrations: [
    matomoIntegration({
      matomoURL: process.env.GATSBY_MATOMO_URL,
      siteID: process.env.GATSBY_MATOMO_SITE_ID,
    }),
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

const SubmitButton = (props) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    {...props}
  />
)

/**
 * Wraps the apps root element with consent-manager
 * See:
 * * https://github.com/techboi/consent-manager
 * * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement
 */
export function ConsentManagerWrapper({ children }) {
  const storage = useConsentStateStore()

  return (
    <ConsentManager
      config={consentManagerConfig}
      store={storage}
      fallbackComponent={FallbackComponent}
    >
      {children}
      <ConsentManagerForm
        formComponent={InterfaceDefault}
        Switch={Switch}
        SubmitButton={SubmitButton}
      />
    </ConsentManager>
  )
}

/**
 * Called when the user changes routes, including on the initial load of the app
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onRouteUpdate
 */
export function onRouteUpdate({ location, prevLocation }) {
  const { trackPageViewSPA } = getMatomoTracker()

  if (!prevLocation) {
    return
  }

  // This ensures plugins like react-helmet finished their work
  window.setTimeout(() => {
    const trackResult = trackPageViewSPA({ location, prevLocation })

    // Debug logging
    if (process.env.gatsby_log_level === `verbose`) {
      const { url, title } = trackResult
      if (!trackResult) {
        return console.debug(
          `[Matomo] Failed to track page view: ${url} - ${title}`
        )
      }
      console.debug(`[Matomo] Page view for: ${url} - ${title}`)
    }
  }, 0)
}
