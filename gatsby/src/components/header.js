import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useCallback, useEffect, useState } from "react"
import { useLingui } from "@lingui/react"

const Header = ({ siteTitle }) => {
  const { i18n } = useLingui()
  const [activeLocale, setActiveLang] = useState(i18n.locale)

  function getOtherLanguage(lang) {
    const locales = Object.keys(i18n._messages)
    return locales[!locales.indexOf(lang) ? 1 : 0]
  }

  // Cheap switch method as we demo with two locales
  const handleLangSwitch = useCallback(
    (e) => {
      setActiveLang((active) => getOtherLanguage(active))
    },
    [i18n.locales]
  )

  useEffect(() => {
    if (activeLocale !== i18n.locale) {
      i18n.activate(activeLocale)
    }
  }, [activeLocale, i18n.locale, i18n.activate])

  return (
    <header className="bg-purple-600 mb-6 text-white">
      <div className="mx-auto max-w-xl p-4 flex justify-between">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <button onClick={handleLangSwitch} className="bg-purple-800">
          Switch to {getOtherLanguage(activeLocale)}
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
