import React from "react"
import { PrivacyManager, PrivacyManagerForm } from "@techboi/privacy-manager"

import { DecisionsForm } from "./decisions-form"
import { FallbackComponent } from "./fallback-component"
import PrivacyManagerUIContext from "./ui-context"
import PrivacyManagerToggle from './toggle'

const defaultConfig = {
  description: ``,
  configIconURI: `data:image/svg+xml,%3csvg fill='black' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' clip-rule='evenodd'%3e%3c/path%3e%3c/svg%3e`,
}

const privacyManagerConfig = {
  integrations: [
    {
      id: "images",
      title: "Gatsby Image",
      description: "You didn't consent to loading images of Gatsby.",
      iconSrc: `data:image/svg+xml,%3csvg fill='black' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z' clip-rule='evenodd'%3e%3c/path%3e%3c/svg%3e`,
      privacyPolicyUrl: 'https://gdpr.eu/what-is-gdpr/'
    },
    {
      id: "integration-with-wrapper",
      title: 'Red Box Ltd.',
      description: 'Adds red borders around your content, demonstrates use of components that do e.g. click tracking',
      iconSrc: `data:image/svg+xml,%3csvg fill='none' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'%3e%3c/path%3e%3c/svg%3e`,
      wrapperComponent: ({ children }) => (
        <div style={{ border: "3px solid red" }}>{children}</div>
      ),
    },
  ],
}

export function PrivacyManagerWrapper({ children }) {
  const storage = React.useState({
    decisions: {},
  })
  const [isOpen, setIsOpen] = React.useState(!storage.decisions || !!Object.keys(storage.decisions).length)

  return (
    <PrivacyManagerUIContext.Provider
      value={{ isOpen, setIsOpen }}
    >
      <PrivacyManager
        config={privacyManagerConfig}
        store={storage}
        fallbackComponent={FallbackComponent}
      >
        {children}
        <PrivacyManagerForm formComponent={DecisionsForm} />
        <PrivacyManagerToggle />
      </PrivacyManager>
    </PrivacyManagerUIContext.Provider>
  )
}
