import React, { useContext, useCallback } from "react"

import { HiCog } from "react-icons/hi"

import { useIntegration } from "@techboi/consent-manager"

import ConsentManagerUIContext from "./ui-context"

const ConsentManagerToggle = () => {
  const { isOpen, setIsOpen } = useContext(ConsentManagerUIContext)

  const openConsentManager = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  if (isOpen) {
    return null
  }

  return (
    <button
      onClick={openConsentManager}
      className="bg-transparent border-none fixed bottom-0 right-0 p-4"
    >
      <HiCog />
    </button>
  )
}

export default ConsentManagerToggle
