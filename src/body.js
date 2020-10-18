import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { THEMEContextProvider, useStyle } from "./utils/theme"

export default function Body({ children }) {
  const [theme] = useStyle()

  return (
    <div
      className={window.location.pathname != "/resume" && "noselect"}
      style={{
        backgroundColor: theme == "light" ? "#fff" : "#090909",
        height: window.location.pathname != "/resume" ? "100vh" : "100%",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="theme-color"
          content={theme == "light" ? "#fff" : "#090909"}
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Helmet>
      {children}
    </div>
  )
}
