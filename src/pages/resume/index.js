import React from "react"
import "../../styles/resume.css"
import JSON from "./resume.json"
import Particles from "./../../components/particles/index"
import BackgroundT from "../../components/backgroundT"
export default function Resume() {
  const isNumber = num => {
    console.log(num, typeof num, isNaN(parseInt(num)))
    return !isNaN(parseInt(num))
  }
  const RenderingCV = ({ arr }) => {
    const array = typeof arr == "object" ? Object.entries(arr) : arr
    return array.map((e, i) => (
      <>
        {!isNumber(e[0]) && (
          <p className={"primaryRT small"}>
            "{e[0].toLowerCase()}" : {Array.isArray(e[1]) ? "[" : "{"}
          </p>
        )}
        <div style={{ paddingLeft: 30 }}>
          {!Array.isArray(e[1]) ? (
            typeof e[1] != "object" ? (
              <p className={"primaryR"}>
                "{e[1]}"{isNumber(e[0]) && ","}
              </p>
            ) : (
              <RenderingCV arr={e[1]} />
            )
          ) : (
            <RenderingCV arr={e[1]} />
          )}
        </div>
        <p className={"primaryT small"}>
          {!isNumber(e[0]) && (
            <>
              {Array.isArray(e[1]) ? "]" : "}"}
              {Object.entries(arr).length != i + 1 && ","}
            </>
          )}
        </p>
      </>
    ))
  }
  return (
    <>
      <Particles />
      <BackgroundT text={["RESUME"]} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
          height: "100%",
          padding: "40px 20px",
        }}
      >
        <div style={{ width: 800 }}>
          <p className={"primaryT larger"}>"RAJA OSAMA" : {"{"}</p>
          <div style={{ color: "#353b2f", paddingLeft: 30 }}>
            <p className={"primaryC small"}>
              {" "}
              // JAVASCRIPT FULL STACK DEVELOPER{" "}
            </p>
            <p className={"primaryC small"}> // Email : dks4mii@gmail.com </p>
            <p className={"primaryC small"}> // Phone : +92-305-1255646 </p>
            <br />
            <RenderingCV arr={JSON} />
          </div>
          <p className={"primaryT larger"}>{"}"}</p>
        </div>
      </div>
    </>
  )
}
