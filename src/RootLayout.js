import React, { Component } from "react"
import { THEMEContextProvider } from "./utils/theme"

export default function RootLayout({ children }) {
  return (
    <>
      <THEMEContextProvider>{children}</THEMEContextProvider>
    </>
  )
}
