import React from "react"
import { ConsentManagerWrapper } from "./src/components/consent-manager/wrapper"

import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <ConsentManagerWrapper>{element}</ConsentManagerWrapper>
}
