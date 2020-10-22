import React, { useState } from "react"
import { Navicon, Close } from "@styled-icons/evil"
import { Link } from "gatsby"
import BackgroundT from "../backgroundT"
import { useStyle } from "../../utils/theme"
import Pattern from "../pattern"
import { Animated } from "react-animated-css"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
export default function Header(props) {
  const [drawer, setdrawer] = useState(false)
  const MenuIcon = !drawer ? Navicon : Close
  const [theme, setTheme] = useStyle()

  return (
    <>
      <header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 2vw 20px 2vw",
            alignItems: "center",
            height: "5vh",
          }}
        >
          <MenuIcon
            onClick={() => setdrawer(!drawer)}
            className="primaryT hover"
            size="38"
          />

          <span className="primaryT small showOnxs">{props.title}</span>
          <div
            style={{ padding: 10, textTransform: "uppercase" }}
            className="primaryLT hover noselect"
            onClick={() => setTheme()}
          >
            {theme}
          </div>
        </div>
      </header>

      <Animated
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        animationInDuration={1400}
        animationOutDuration={1400}
        isVisible={drawer}
      >
        {drawer && <Menu />}
      </Animated>
    </>
  )
}

const Menu = props => {
  const [theme] = useStyle()

  return (
    <div
      style={{
        backgroundColor: theme == "light" ? "#fff" : "#090909",
      }}
      className={"menu"}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 300,
          height: 300,
          "border-bottom-right-radius": " 300px",
          backgroundColor: "#ffdb66",
        }}
      />
      <Pattern />
      <div style={{ margin: "100px 100px" }}>
        <h1
          className={"primaryT"}
          style={{ fontSize: "16vh", fontWeight: 900, marginBottom: 0 }}
        >
          MENU
        </h1>
        <div style={{ paddingLeft: 10, borderLeft: "2px solid black" }}>
          <h2 style={{ fontWeight: 100, margin: 0 }}>
            {" "}
            <Link
              className={"primaryLT "}
              style={{ textTransform: "capitalize", textDecoration: "none" }}
              to="/home"
            >
              Home
            </Link>
          </h2>
          <h2 style={{ fontWeight: 100, margin: 0 }}>
            {" "}
            <Link
              className={"primaryLT "}
              style={{ textTransform: "capitalize", textDecoration: "none" }}
              to="/aboutme"
            >
              {" "}
              About Me
            </Link>
          </h2>
          <h2 style={{ fontWeight: 100, margin: 0 }}>
            {" "}
            <Link
              className={"primaryLT "}
              style={{ textTransform: "capitalize", textDecoration: "none" }}
              to="/skills"
            >
              {" "}
              Skill
            </Link>
          </h2>
          <h2 style={{ fontWeight: 100, margin: 0 }}>
            {" "}
            <Link
              className={"primaryLT "}
              style={{ textTransform: "capitalize", textDecoration: "none" }}
              to="/contact"
            >
              {" "}
              Contact
            </Link>
          </h2>
        </div>
      </div>

      <BackgroundT text={["MENU"]} />
    </div>
  )
}
