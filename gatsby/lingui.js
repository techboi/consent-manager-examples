import { setupI18n } from "@lingui/core"
import { locales } from "./lingui.config"

export const i18n = setupI18n({
  locale: "en",
  locales,
  messages: {
    en: {
      "consent-manager.form.headline": "Website Settings",
      "consent-manager.form.description":
        "Some features are disabled by default to protect your privacy:",
      "consent-manager.form.button": "Close and save",
      "consent-manager.integration.default.privacy-policy":
        "Privacy Policy by {title} yo {bar} zap {baz} grr",
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
