import { Link } from "gatsby"
import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import Lottie from "react-lottie"
import HackingGlitchText from "../../components/hackingGlitchText"
import { useGlobal } from "../../utils/context"
import { useStyle } from "../../utils/theme"
import github from "./../../assets/icons/github.png"

const Home = props => {
  const [theme, _, THEMEJSON] = useStyle()
  const [pageData, setPageData] = useGlobal()
  useEffect(() => {
    setPageData({ title: "HOME" })
  }, [])
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <title>Raja Osama | Home Page</title>
      </Helmet>
      <div className="glitch-wrapper">
        <h1
          className={"glitch"}
          data-text="Raja Osama"
          style={{
            fontSize: "calc(4vh + 3vw)",
            overflow: "hidden",
            fontWeight: "bold",
          }}
        >
          <HackingGlitchText attributes={{ id: "GH" }}>
            Raja Osama
          </HackingGlitchText>
        </h1>
      </div>
      <p
        className={"glitchH"}
        data-text="An Artist who design masterpieces with his front-end &amp; back-end
        development skills over JavaScript and PHP."
        style={{
          fontSize: "calc(1.3vh + 1.5vw)",
          marginLeft: "2px",
          fontWeight: 100,
          width: "50vw",
          opacity: "0.63",
        }}
      >
        An Artist who design masterpieces with his front-end &amp; back-end
        development skills over JavaScript and PHP.
        <br />
      </p>
      <div>
        <button
          className="btn outline_btn"
          type="button"
          style={{
            width: "160px",
            marginRight: "9px",
            color: THEMEJSON[theme].color,
            background: "rgba(41, 41, 48, 0)",
            fontSize: "14px",
            border: `1px solid ${THEMEJSON[theme].color}`,
          }}
        >
          <Link to={"/work"}>🛠 SEE MY&nbsp;WORK</Link>
        </button>
        <button
          className="btn outline_btn"
          type="button"
          style={{
            width: "120px",
            color: THEMEJSON[theme].color,
            background: "rgba(41, 41, 48, 0)",
            fontSize: "14px",
            border: `1px solid ${THEMEJSON[theme].color}`,
          }}
        >
          <a href={"https://github.com/Raja0sama"}>
            {" "}
            <img src={github} style={{ width: 20 }} />
            GITHUB
          </a>
        </button>
      </div>
    </section>
  )
}

export default Home
