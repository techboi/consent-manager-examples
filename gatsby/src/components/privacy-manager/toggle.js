import React, { useContext, useCallback } from "react"

import { HiCog } from 'react-icons/hi'

import { useIntegration } from "@techboi/privacy-manager"

import PrivacyManagerUIContext from "./ui-context"

const PrivacyManagerToggle = () => {
  const { isOpen, setIsOpen } = useContext(PrivacyManagerUIContext)

  const openPrivacyManager = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  if (isOpen) {
    return null
  }

  return (
    <button
      onClick={openPrivacyManager}
      className="bg-transparent border-none fixed bottom-0 right-0 p-4"
    >
      <HiCog/>
    </button>
  )
}

export default PrivacyManagerToggle
