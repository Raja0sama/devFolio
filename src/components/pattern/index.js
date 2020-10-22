import React from "react"

export default function Pattern({ reverse }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: reverse ? "unset" : 60,
          bottom: !reverse ? "unset" : 60,
          right: reverse ? "unset" : 0,
          left: reverse ? 0 : "unset",
          width: 80,
          height: 150,
          borderRight: reverse ? "unset" : "4px solid #f25850",
          borderLeft: !reverse ? "unset" : "4px solid #f25850",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="pattern_L0UPX"
              patternUnits="userSpaceOnUse"
              width="4.5"
              height="4.5"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y="0"
                x2="0"
                y2="5"
                stroke="#76B7C6"
                stroke-width="2"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#pattern_L0UPX)"
            opacity="1"
          />
        </svg>
      </div>
    </div>
  )
}
