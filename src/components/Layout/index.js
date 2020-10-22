import React from "react"
import Header from "../header"
import Footer from "../footer"

export default function Layout(props) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title={props.title} />
      <div style={{ flex: "auto", overflow: "none" }}>{props.children}</div>
      <Footer title={props.title} footerRight={props.footerRight} />
    </div>
  )
}
