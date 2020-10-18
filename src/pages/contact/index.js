import React from "react"
import Layout from "../../components/Layout"
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import Lottie from "lottie-react-web"
import animation from "../../animation.json"
import BackgroundT from "../../components/backgroundT"
import { Helmet } from "react-helmet"

const Contact = props => (
  <Layout footerRight={<span>03</span>} title={"SKILLS"}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>RAJA OSAMA 😎 | Contact</title>
    </Helmet>
    <div
      className={"scrollbarHide"}
      style={{
        // height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        alignItems: "center",
        top: "10vh",
        bottom: "10vh",
        height: "80vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <Row style={{ padding: "0px 12vw 0px 12vw" }} gutter={20}>
        <Col className={"hideOnxs"} md={1}>
          <div></div>
        </Col>
        <Col xs={12} md={5}>
          <h1
            style={{ marginBottom: "6px" }}
            className="primaryT   largest fw400"
          >
            CONTACT
          </h1>
          <input className={"primaryLT semiMedium"} placeholder={"Name"} />
          <input
            type={"phone"}
            className={"primaryLT semiMedium"}
            placeholder={"Phone"}
          />
          <textarea
            style={{ height: undefined }}
            className={"primaryLT semiMedium"}
            rows={"3"}
            cols={"80"}
            placeholder={"Message"}
          ></textarea>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <button className="btn success"> Send </button>
            <span className="primaryDT ">
              &nbsp;&nbsp;&nbsp;&nbsp;+ Add a file
            </span>
          </div>
        </Col>

        <Col className={"hideOnxs"} xs={12} md={5}>
          <div>
            <h1
              // style={{ padding: "0px 12vw 0px 12vw", alignSelf: "flex-start" }}
              className="primaryT   largest fw400"
            >
              <span style={{ color: "transparent" }} className={"border"}>
                {" "}
                S{" "}
              </span>
            </h1>
            <p className={"primaryLT small"}>
              if you liked my work, write to me, I will choose the convenient
              time and place. Can meet face-to-face in{" "}
              <span className={"primaryT small"}>Karachi, Pakistan</span>. and
              Another thing{" "}
              <span className={"primaryT small"}>
                Do not forget to bring a good mood.
              </span>
            </p>
            <p className="primaryLT small">
              <span className={"primaryT small"}>Phone</span>
              <br />
              +92-305-1255646
              <br />
              <span className={"primaryT small"}>Email</span>
              <br />
              dks4mii@gmail.com
            </p>
          </div>
        </Col>
        <Col className={"hideOnxs"} md={1}>
          <div></div>
        </Col>
      </Row>
    </div>
    <BackgroundT text={["GET IN", "Contact"]} />
  </Layout>
)

export default Contact
