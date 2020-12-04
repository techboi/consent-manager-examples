import React, { useCallback } from 'react'
import { Field, Form } from 'react-final-form'
import { useIntegrations, useEnabledIntegrations } from '@techboi/privacy-manager'

export const PrivacyManagerForm = () => {
  const [enabledIntegrations, setEnabledIntegrations] = useEnabledIntegrations()
  const integrations = useIntegrations()

  const handleFormSubmit = useCallback(
    (values) => {
      setEnabledIntegrations(() => values.enabled)
    },
    [setEnabledIntegrations]
  )

  return (
    <DecisionsForm
      integrations={integrations}
      initialValues={{ enabled: enabledIntegrations }}
      onSubmit={handleFormSubmit}
    />
  )
}

const DecisionsForm = ({
  integrations,
  initialValues,
  onSubmit
}) => {
  const handleSubmitCb = useCallback(({ enabled }) => {
    onSubmit({ enabled })
  }, [onSubmit])

  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmitCb}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          {integrations.map(({ id }) => (
            <label key={id}>
              <Field
                name='enabled'
                component='input'
                type='checkbox'
                value={id}
              />{' '}
              {id}
            </label>
          ))}
          <button type='submit'>Submit</button>
        </form>
      )}
    />
  )
}
