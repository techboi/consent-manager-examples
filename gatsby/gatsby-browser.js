import React from "react"

import "./src/styles/global.css"

import { ConsentManagerWrapper } from "./src/consent-manager/consent-manager"
export { onRouteUpdate } from "./src/consent-manager/consent-manager"

export const wrapRootElement = ({ element }) => {
  return <ConsentManagerWrapper>{element}</ConsentManagerWrapper>
}
