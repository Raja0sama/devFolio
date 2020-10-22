import React, { Component } from "react"
import { GlobalContextProvider } from "./utils/context"
import { THEMEContextProvider } from "./utils/theme"

export default function RootLayout({ children }) {
  return (
    <>
      <THEMEContextProvider>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </THEMEContextProvider>
    </>
  )
}
