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
      style={{ position: "absolute", top: 20, left: 0, right: 0, bottom: 20 }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          className={"scrollbarHide"}
          style={{ width: 700, padding: 20, overflow: "auto" }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "16vh",
              fontWeight: 900,
              position: "relative",
              lineHeight: 0.8,
            }}
            className="primaryT"
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                bottom: "0",
                left: "0",
                right: "0",
                background: "#ffdb66",
                mixBlendMode: "difference",
                margin: "50px",
              }}
            />
            RAJA OSAMA
          </p>
          <p
            style={{
              paddingLeft: "10px",
              lineHeight: "1.5",
              borderLeft: "11px solid",
            }}
            className="primaryLT  small fw100"
          >
            {" "}
            A full-Stack Passionate developer who loves coding and loves solving
            complex problems with over 3.5 years of experience in developing
            Mobile Apps, Websites and server sided app on various languages like
            PHP, JavaScript, C#, Java, dart, and swift and have worked with
            NoSQL type databases like Firebase and MongoDB as well as SQL type
            Databases like MSSQL, MYSQL.
            <br />
            Currently Focused on Multiplatform Development and Cross-platform
            Development over React Native and with PWA. I always tire to stay
            up-to-date with the latest technologies available with time and I
            consider it my strength.
          </p>
        </div>
      </div>
    </div>
    <BackgroundT text={["ABOUT", "ME"]} />
  </Layout>
)

export default AboutMe
