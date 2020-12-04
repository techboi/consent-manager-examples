import React, { useCallback, useContext } from "react"
import { Field, Form } from "react-final-form"

import PrivacyManagerUIContext from "./ui-context"
import { Switch } from "./switch"

export const DecisionsForm = ({ integrations, initialValues, onSubmit }) => {
  const { isOpen, setIsOpen } = useContext(PrivacyManagerUIContext)

  const handleSubmitCb = useCallback(
    ({ enabled }) => {
      onSubmit({ enabled })
      setIsOpen(false)
    },
    [onSubmit]
  )

  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmitCb}
      render={({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className={`fixed bottom-0 left-0 right-0 bg-gray-100 p-4${
            !isOpen ? " hidden" : ''
          }`}
        >
          <h1>We care about your privacy!</h1>
          <p>Please select the services you want to share data with</p>
          <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-6 max-w-6xl">
            {integrations.map(({ id, title }) => (
              <Field
                key={id}
                render={(props) => (
                  <Switch {...props.input}>{title || id}</Switch>
                )}
                type="checkbox"
                name="enabled"
                value={id}
              />
            ))}
          </div>
          <button
            type="submit"
            className="rounded bg-green-500 text-white mt-4 mx-auto block"
          >
            Submit
          </button>
        </form>
      )}
    />
  )
}
