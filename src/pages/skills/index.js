import React from "react"
import Layout from "../../components/Layout"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import Lottie from "lottie-react-web"
import animation from "../../animation.json"
import BackgroundT from "../../components/backgroundT"
import { Helmet } from "react-helmet"

const Skills = props => (
  <Layout footerRight={<span>03</span>} title={"SKILLS"}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>RAJA OSAMA 😎 | Skills</title>
    </Helmet>
    <div
      className={"scrollbarHide jcc"}
      style={{
        // height: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        overflow: "hidden",
        alignItems: "center",
        position: "absolute",
        top: "10vh",
        bottom: "10vh",
        height: "80vh",
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
      <h1
        style={{
          padding: "0px 12vw 0px 12vw",
          margin: 10,
          alignSelf: "flex-start",
        }}
        className="primaryT   largest fw400"
      >
        <span className={"border"}>SKILLS</span>
      </h1>

      <Row style={{ padding: "0px 12vw 0px 12vw" }} gutter={20}>
        <Col xs={12} md={6}>
          <p className="primaryLT medium fw200">
            - Cross-Platform Developer (React-Native, Flutter)
          </p>
          <p className="primaryLT medium fw200">- Android Native Developer</p>
          <p className="primaryLT medium fw200">- PHP Developer</p>
          <p className="primaryLT medium fw200">
            - React.Js Developer (Next.js, Gatsby.js, Redux, DVA)
          </p>
        </Col>
        <Col xs={12} md={6}>
          {" "}
          <p className="primaryLT medium fw200">- PWA Developer</p>
          <p className="primaryLT medium fw200">
            - C# Developer (Winform Apps)
          </p>
          <p className="primaryLT medium fw200">- .Net Developer</p>
          <p className="primaryLT medium fw200">
            - Node.js Developer (GraphQL, Express.js)
          </p>
          <p className="primaryLT medium fw200">- WordPress Developer</p>
        </Col>
      </Row>
    </div>
    <BackgroundT text={["SKILLS"]} />
  </Layout>
)

export default Skills
