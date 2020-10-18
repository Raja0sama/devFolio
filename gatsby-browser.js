import React from "react"
import RootLayout from "./src/RootLayout"
import Body from "./src/body"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <RootLayout>
    <Body>{element}</Body>
  </RootLayout>
)
