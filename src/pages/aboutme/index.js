import React from "react"
import Layout from "../../components/Layout"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import BackgroundT from "../../components/backgroundT"
import { Helmet } from "react-helmet"

const AboutMe = props => (
  <Layout footerRight={<span>02</span>} title={"ABOUT ME"}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>RAJA OSAMA 😎 | About Me</title>
    </Helmet>
    <div
      style={{
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Row style={{ height: "100%" }} gutter={20}>
          <Col
            className={"scrollbarHide"}
            style={{
              padding: "0px 8vw 0px",
              top: "10vh",
              bottom: "10vh",
              height: "80vh",
              overflow: "scroll",
            }}
            xs={12}
            md={6}
          >
            <div
              className={"showOnxs"}
              style={{
                height: "200px",
                backgroundColor: "white",
                display: "flex",
              }}
            >
              <img
                style={{
                  height: "inherit",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={window.location.origin + "/me.jpg"}
              />
            </div>
            <span
              style={{ borderBottom: "0.5px #83838314 solid" }}
              className="primaryT  largest fw400"
            >
              RAJA OSAMA
            </span>
            <p className="primaryLT  medium fw200">
              {" "}
              A full-Stack Passionate developer who loves coding and loves
              solving complex problems with over 3.5 years of experience in
              developing Mobile Apps, Websites and server sided app on various
              languages like PHP, JavaScript, C#, Java, dart, and swift and have
              worked with NoSQL type databases like Firebase and MongoDB as well
              as SQL type Databases like MSSQL, MYSQL.
              <br />
              Currently Focused on Multiplatform Development and Cross-platform
              Development over React Native and with PWA. I always tire to stay
              up-to-date with the latest technologies available with time and I
              consider it my strength.
            </p>
          </Col>
          <Col
            style={{
              padding: "0 8vw 0 1vw",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              // justifyContent: "center",
              // backgroundColor: "red",
              // alignItems: "center",
            }}
            xs={12}
            md={6}
          >
            <img
              className={"hideOnxs"}
              src={window.location.origin + "/me.jpg"}
            />
          </Col>
        </Row>
      </div>
    </div>
    <BackgroundT text={["ABOUT", "ME"]} />
  </Layout>
)

export default AboutMe
