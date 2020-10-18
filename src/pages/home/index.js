import React from "react"
import Layout from "../../components/Layout"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import Lottie from "lottie-react-web"
import animation from "../../animation.json"
import BackgroundT from "../../components/backgroundT"
import { Helmet } from "react-helmet"
import { useStyle } from "../../utils/theme"
export default function Home() {
  return (
    <Layout title={"HOME"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RAJA OSAMA 😎 | HOME</title>
      </Helmet>
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
        <Row gutter={20}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
            xs={12}
            md={6}
          >
            <div style={{ display: "block" }}>
              <img
                style={{ mixBlendMode: "difference", width: "20vh" }}
                src={"./logo.png"}
              />
              <p
                style={{ margin: 0, fontSize: "5.5vh" }}
                className="primaryLT larger fw200"
              >
                I'm
                <b className={"primaryT "}>{" Raja Osama."}</b>
                <br />
                <span
                  style={{ lineHeight: 1.2, display: "block", fontSize: "5vh" }}
                  className={"large fw100"}
                >
                  A Tech agnostic Full-stack Developer and Product Designer.
                </span>
              </p>
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
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
            className="hideOnxs"
            xs={12}
            md={6}
          >
            <Lottie
              width={300}
              options={{
                animationData: animation,
              }}
            />
            {/* <img
              style={{ WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }}
              src={"./developer.png"}
            /> */}
          </Col>
        </Row>
      </section>

      <BackgroundT text={["CREATIVE", "DEVELOPER"]} />
    </Layout>
  )
}
