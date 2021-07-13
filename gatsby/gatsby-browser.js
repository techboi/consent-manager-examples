import React from "react"

import { I18nProvider } from "@lingui/react"
import { i18n } from "./lingui"

import "./src/styles/global.css"

import { ConsentManagerWrapper } from "./src/consent-manager/consent-manager"
export { onRouteUpdate } from "./src/consent-manager/consent-manager"

export const wrapRootElement = ({ element }) => {
  return (
    <I18nProvider i18n={i18n}>
      <ConsentManagerWrapper>{element}</ConsentManagerWrapper>
    </I18nProvider>
  )
}
