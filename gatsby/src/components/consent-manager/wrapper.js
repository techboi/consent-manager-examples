import React from "react"
import { ConsentManager, ConsentManagerForm } from "@techboi/consent-manager"

import { DecisionsForm } from "./decisions-form"
import { FallbackComponent } from "./fallback-component"
import ConsentManagerUIContext from "./ui-context"
import ConsentManagerToggle from "./toggle"

const defaultConfig = {
  description: ``,
  configIconURI: `data:image/svg+xml,%3csvg fill='black' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' clip-rule='evenodd'%3e%3c/path%3e%3c/svg%3e`,
}

const consentManagerConfig = {
  integrations: [
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
  const storage = React.useState({
    decisions: {},
  })
  const [isOpen, setIsOpen] = React.useState(
    !storage.decisions || !!Object.keys(storage.decisions).length
  )

  return (
    <ConsentManagerUIContext.Provider value={{ isOpen, setIsOpen }}>
      <ConsentManager
        config={consentManagerConfig}
        store={storage}
        fallbackComponent={FallbackComponent}
      >
        {children}
        <ConsentManagerForm formComponent={DecisionsForm} />
        <ConsentManagerToggle />
      </ConsentManager>
    </ConsentManagerUIContext.Provider>
  )
}
