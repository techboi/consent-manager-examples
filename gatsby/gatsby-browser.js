import React from 'react'
import { PrivacyManagerWrapper } from './src/components/privacy-manager-wrapper'

import './src/styles/global.css';

export const wrapRootElement = ({ element }) => {
  return (
    <PrivacyManagerWrapper>{element}</PrivacyManagerWrapper>
  )
}
