import React, { useCallback } from "react"

import { useIntegration, useDecision } from "@consent-manager/core"
import { HiCog } from "react-icons/hi"

export const FallbackComponent = ({ integrationId, fallbackUrl }) => {
  const integration = useIntegration(integrationId)
  const [, setDecision] = useDecision(integrationId)

  const enableIntegration = useCallback(() => {
    setDecision(true)
  }, [setDecision])

  if (!integration) {
    throw new Error(`No integration found for "${integrationId}"`)
  }

  const { title, privacyPolicyUrl, Icon, description } = integration

  return (
    <section className="bg-gray-100 p-5 border-4 border-gray-700">
      <h1 className="flex items-center gap-4">
        <Icon className="w-12" />
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
        <button onClick={enableIntegration}>
          <HiCog style={{ display: "inline" }} /> Enable {title}
        </button>
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
