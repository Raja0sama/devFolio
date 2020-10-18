import React, { useState } from "react"
import { Navicon, Close } from "@styled-icons/evil"
import { Link } from "gatsby"
import BackgroundT from "../backgroundT"
import { useStyle } from "../../utils/theme"

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

      {drawer && <Menu />}
    </>
  )
}

const Menu = props => {
  const [theme] = useStyle()

  return (
    <div
      style={{
        backgroundColor: theme == "light" ? "#dadada" : "#090909",
      }}
      className={"menu"}
    >
      <Link
        className={"primaryT largest"}
        style={{ textDecoration: "none" }}
        to="/home"
      >
        HOME
      </Link>

      <Link
        className={"primaryT largest"}
        style={{ textDecoration: "none" }}
        to="/aboutme"
      >
        {" "}
        ABOUT ME
      </Link>

      <Link
        className={"primaryT largest"}
        style={{ textDecoration: "none" }}
        to="/skills"
      >
        {" "}
        SKILL
      </Link>
      <Link
        className={"primaryT largest"}
        style={{ textDecoration: "none" }}
        to="/contact"
      >
        {" "}
        CONTACT
      </Link>
      <BackgroundT text={["MENU"]} />
    </div>
  )
}
