import React from "react"

const BackgroundT = props => (
  <div
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      flexDirection: "column",
      pointerEvents: "none",
      mixBlendMode: "difference",
      // zIndex: -1,
    }}
  >
    {props.text.map((e, i) => (
      <span className={"backgroundT"}>{e} </span>
    ))}
  </div>
)

export default BackgroundT
