import React, { useEffect } from "react"
import { useStyle } from "./utils/theme"
import "./assets/bootstrap/css/bootstrap.min.css"
import "./assets/fonts/ionicons.min.css"
import "./assets/css/styles.css"
import logo from "./assets/img/logo.png"
import { Link } from "gatsby"
import themeJSON from "./theme.json"
import { useGlobal } from "./utils/context"

export default function Body({ children }) {
  const [theme, setTheme, THEMEJSON] = useStyle()
  const [pageData, setPageData] = useGlobal()
  useEffect(() => {
    document.body.setAttribute(
      "style",
      `height: 100%;background: ${themeJSON[theme].background};color: ${themeJSON[theme].color};font-family: 'Maven Pro', sans-serif;`
    )
  }, [theme])

  return (
    <div className="d-flex flex-fill" style={{ height: "100vh" }}>
      <div
        className="d-flex flex-column"
        style={{ height: "100%", width: "60px", background: "rgb(2 2 2 / 1)" }}
      >
        <div
          className="justify-content-center align-items-center"
          style={{ width: "100%", height: "100px" }}
        >
          <img
            alt={"logo"}
            className="img-fluid"
            src={logo}
            style={{ padding: "15px" }}
          />
        </div>
        <div
          className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex flex-column justify-content-center align-items-center justify-content-xl-center"
          style={{ width: "100%", height: "100%" }}
        >
          <Link
            className="d-flex justify-content-center align-items-center menuicon"
            style={{ width: "100%", height: "60px" }}
            to="/"
          >
            <i
              className="icon ion-ios-home-outline"
              style={{ fontSize: "30px", color: "white" }}
            />
          </Link>
          <Link
            className="d-flex justify-content-center align-items-center menuicon"
            style={{ width: "100%", height: "60px" }}
            to="/about"
          >
            <i
              className="icon ion-ios-person-outline"
              style={{ fontSize: "30px", color: "white" }}
            />
          </Link>
          <Link
            className="d-flex justify-content-center align-items-center menuicon"
            style={{ width: "100%", height: "60px" }}
            to="/skills"
          >
            <i
              className="icon ion-ios-lightbulb-outline"
              style={{ fontSize: "30px", color: "white" }}
            />
          </Link>
          <Link
            className="d-flex justify-content-center align-items-center menuicon"
            style={{ width: "100%", height: "60px" }}
            to="/blogs"
          >
            <i
              className="icon ion-ios-monitor-outline"
              style={{ fontSize: "30px", color: "white" }}
            />
          </Link>
        </div>
        <div
          className="justify-content-center align-items-center"
          style={{ width: "100%", height: "100px" }}
        >
          <img
            alt={"logo"}
            className="img-fluid"
            src={logo}
            style={{ padding: "15px" }}
          />
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-center"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "rgba(255,255,255,0)",
          padding: "5vw 6vw",
          overflow : 'hidden'
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100px",
            paddingLeft: "5vw",
            paddingRight: "5vw",
          }}
        >
          {/* <h5 style={{ width: "94px" }}>{pageData.title}</h5> */}
          <div
            className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-end justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end"
            style={{ width: "100%" }}
          >
            <button
              className="btn"
              type="button"
              style={{
                color: "rgb(228,228,228)",
                background: "rgb(17,17,17)",
                fontSize: "14px",
                marginRight: "10px",
              }}
            >
              <a href={"/resume"}>Resume</a>
            </button>
            <button
              className="btn"
              type="button"
              style={{
                color: "rgb(228,228,228)",
                background: "rgb(17,17,17)",
                fontSize: "14px",
                marginRight: "10px",
              }}
              onClick={() => setTheme("light")}
            >
              Theme
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
