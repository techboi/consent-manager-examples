const React = require('react')
const { PrivacyManagerWrapper } = require('./src/components/privacy-manager-wrapper')

exports.wrapRootElement = ({ element }) => {
  return (
    <PrivacyManagerWrapper>{element}</PrivacyManagerWrapper>
  )
}
