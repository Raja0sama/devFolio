import React from "react"
import Layout from "../../components/Layout"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import Lottie from "lottie-react-web"
import animation from "../../animation.json"
import BackgroundT from "../../components/backgroundT"
import { Helmet } from "react-helmet"
import { useStyle } from "../../utils/theme"
import Particles from "../../components/particles"
export default function Home() {
  return (
    <Layout title={"HOME"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RAJA OSAMA 😎 | HOME</title>
      </Helmet>
      <BackgroundT text={["CREATIVE", "DEVELOPER"]} />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          flexDirection: "column",
          paddingLeft: "10%",
          paddingRight: "10%",
          marginTop: -15,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        <div
          style={{
            display: "block",
            // color: "white",
            zIndex: 0.5,
            display: "flex",
            width: "100%",
            justifyContent: "center",
            lineHeight: 0.8,
          }}
        >
          <div style={{ zIndex: 0.9 }}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <span
                className={"primaryT"}
                style={{ fontSize: "20vh", fontWeight: 700 }}
              >
                I'M
              </span>
              <span style={{ fontSize: "16vh", fontWeight: 700 }}>👋</span>
            </div>
            <br />
            <span
              className={"primaryT"}
              style={{ fontSize: "10vh", fontWeight: 900 }}
            >
              RAJA OSAMA
            </span>
            <br />
            <br />
            <span
              className={"primaryT"}
              style={{ fontSize: "3vh", fontWeight: 100 }}
            >
              Full-Stack Developer \ Cross-Platform Developer \ Tech Agnostic
              Developer
            </span>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <button className="btn success"> Contact Me </button>
              <span className="primaryDT showOnxs">
                &nbsp;&nbsp;&nbsp;&nbsp;SEE MY WORK
              </span>
            </div>
          </div>
        </div>
      </section>
      <Particles />
    </Layout>
  )
}
