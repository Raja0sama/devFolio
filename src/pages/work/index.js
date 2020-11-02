import React, { useEffect, useState } from "react"
import { parse } from "node-html-parser"
import { Helmet } from "react-helmet"

export default function Blogs() {
  const [] = useState(false)
  useEffect(() => {}, [])
  return (
    <div
      className="d-flex flex-column align-items-center disable-scrollbars"
      style={{
        height: "100%",
        marginTop: "70px",
        maringBottom: 10,
        overflow: "auto",
      }}
    >
      <Helmet>
        <title>Raja Osama | Work</title>
      </Helmet>
      <h1 style={{ fontSize: "calc(4vh + 2vw)" }}>Work</h1>
      <p>These are some of the most latest work.</p>
      <div className="flex-row" style={{ width: "100%" }}>
        <div className="flex-column">
          <div>
            <div className="container">
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
