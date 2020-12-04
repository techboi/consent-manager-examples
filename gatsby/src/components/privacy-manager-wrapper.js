import React from 'react'
import { PrivacyManager } from '@techboi/privacy-manager'

import { PrivacyManagerForm } from './privacy-manager-decisions-form'

const privacyManagerConfig = {
  integrations: [
    { id: 'images' },
    {
      id: 'integration-with-wrapper',
      wrapperComponent: ({ children }) => (
        <div style={{ border: '3px solid red' }}>{children}</div>
      ),
    },
  ],
};

export function PrivacyManagerWrapper ({ children }) {
  const storage = React.useState({
    decisions: {},
  });

  return (
    <PrivacyManager
      config={privacyManagerConfig}
      store={storage}
    >
      {children}
      <PrivacyManagerForm />
    </PrivacyManager>
  )
}
