import React from "react"

import { setupI18n } from "@lingui/core"
import { I18nProvider } from "@lingui/react"

import "./src/styles/global.css"

import { ConsentManagerWrapper } from "./src/consent-manager/consent-manager"
export { onRouteUpdate } from "./src/consent-manager/consent-manager"

const i18n = setupI18n({
  locale: "en",
  locales: ["en", "de"],
  messages: {
    en: {
      "consent-manager.form.headline": "Website Settings",
      "consent-manager.form.description":
        "Some features are disabled by default to protect your privacy:",
      "consent-manager.form.button": "Close and save",
    },
    de: {
      "consent-manager.form.headline": "Website Einstellungen",
      "consent-manager.form.description":
        "Einige Funktionen wurden zum Schutz Ihrer Privatsphäre deaktiviert:",
      "consent-manager.form.button": "Schließen und Speichern",
    },
  },
})

i18n.on("missing", (event) => {
  console.log(`Translation in ${event.locale} for ${event.id} is missing!`)
})

export const wrapRootElement = ({ element }) => {
  return (
    <I18nProvider i18n={i18n}>
      <ConsentManagerWrapper i18n={i18n}>{element}</ConsentManagerWrapper>
    </I18nProvider>
  )
}
