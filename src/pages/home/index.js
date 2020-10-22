import React, { useEffect } from "react"
import { useGlobal } from "../../utils/context"
import { useStyle } from "../../utils/theme"

const Home = props => {
  const [theme, _, THEMEJSON] = useStyle()
  const [pageData, setPageData] = useGlobal()
  useEffect(() => {
    setPageData({ title: "1- HOME" })
  }, [])
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "calc(5vh + 4vw)", fontWeight: "bold" }}>
        RAJA OSAMA
        <span aria-label={""} role="img">
          😎
        </span>
      </h1>
      <p
        style={{
          fontSize: "4vh",
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
          SEE MY&nbsp;WORK
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
          GITHUB
        </button>
      </div>
    </section>
  )
}

export default Home
