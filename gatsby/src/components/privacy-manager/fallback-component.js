import React, { useContext, useCallback } from "react"

import { useIntegration } from "@techboi/privacy-manager"
import { HiCog } from 'react-icons/hi'

import PrivacyManagerUIContext from "./ui-context"

export const FallbackComponent = ({ integrationId, fallbackUrl }) => {
  const integration = useIntegration(integrationId)

  const { setIsOpen } = useContext(PrivacyManagerUIContext)

  const openPrivacyManager = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  if (!integration) {
    throw new Error(`No integration found for "${integrationId}"`)
  }

  const { title, privacyPolicyUrl, iconSrc, description } = integration

  return (
    <section className="bg-gray-100 p-5 border-4 border-gray-700">
      <h1 className="inline-flex">
        {iconSrc && (
          <img
            src={iconSrc}
            alt={title}
            aria-hidden="true"
            style={{ width: "1em", marginRight: "0.3em" }}
          />
        )}
        {title}
      </h1>
      {description && <p>{description}</p>}
      {privacyPolicyUrl && (
        <p>
          <a href={privacyPolicyUrl} target="_blank" rel="noreferrer">
            Privacy policy of {title}
          </a>
        </p>
      )}
      <p>
        <button onClick={openPrivacyManager}><HiCog style={{display: 'inline'}}/> Change privacy settings</button>
      </p>
      {fallbackUrl && (
        <p>
          Alternative:
          <br />
          Visit{" "}
          <a href={fallbackUrl} target="_blank" rel="noreferrer">
            {fallbackUrl}
          </a>
        </p>
      )}
    </section>
  )
}
