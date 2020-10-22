import { Link } from "gatsby"
import React from "react"

export default function Footer(props) {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 2vw 5px 2vw",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div className="primaryDT smaller  hideOnxs">{props.title}</div>
        <div style={{ display: "flex" }} className="primaryDT smaller">
          {!props.footerRight ? (
            <div class="navbar">
              <a>
                <Link to={"/blogs"}>BLOGS</Link>
              </a>
              <a>
                <Link to={"/projects"}>PROJECTS</Link>
              </a>
              <a>
                <a href={window.location.origin + "/resume"}>RESUME</a>
              </a>
            </div>
          ) : (
            props.footerRight
          )}
        </div>
      </div>
    </footer>
  )
}
