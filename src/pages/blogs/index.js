import React, { useEffect } from "react"
import { useGlobal } from "../../utils/context"
import cover from "./../../assets/img/wil-stewart-2aCuwSh4RRk-unsplash.jpg"
import Row from "react-simple-flex-grid"
export default function Blogs() {
  const [_, setPageData] = useGlobal()
  console.log(Row)
  useEffect(() => {
    setPageData({ title: "3- BLOGS" })
  }, [])
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ height: "100%", marginTop: "50px", overflow: "auto" }}
    >
      <h1 style={{ fontSize: "calc(4vh + 2vw)" }}>BLOGS</h1>
      <p>These blogs are published on Medium</p>
      <div className="flex-row" style={{ width: "100%" }}>
        <div className="flex-column">
          <Card />
        </div>
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div style={{ width: "300px", padding: "4px", borderStyle: "solid" }}>
      <img
        alt={"BLOG"}
        src={cover}
        style={{ width: "101%", padding: "5px", borderStyle: "none" }}
      />
      <h4 style={{ padding: "3px" }}>Title of my article</h4>
      <p style={{ opacity: "0.73" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequas
        <br />
      </p>
    </div>
  )
}
