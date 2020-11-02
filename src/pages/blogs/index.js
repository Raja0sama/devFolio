import React, { useEffect, useState } from "react"
import { useGlobal } from "../../utils/context"
import cover from "./../../assets/img/wil-stewart-2aCuwSh4RRk-unsplash.jpg"
import { parse } from "node-html-parser"

import { Row, Col } from "react-simple-flex-grid"
import Axios from "axios"
import { Helmet } from "react-helmet"

export default function Blogs() {
  const [_, setPageData] = useGlobal()
  const [blogs, setblogs] = useState([])
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    setPageData({ title: "BLOGS" })
    setTimeout(() => {
      Axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40supersami"
      ).then(({ data }) => {
        setloading(false)
        setblogs(data.items)
      })
    }, 1000)
  }, [])
  return (
    <div
      className="d-flex flex-column align-items-center disable-scrollbars"
      style={{
        height: "100%",
        marginTop: "70px",
        maringBottom: 10,
        overflow: "auto",
      }}
    >
      <Helmet>
        <title>Raja Osama | Blogs</title>
      </Helmet>
      <h1 style={{ fontSize: "calc(4vh + 2vw)" }}>BLOGS</h1>
      <p>These blogs are published on Medium</p>
      <div className="flex-row" style={{ width: "100%" }}>
        <div className="flex-column">
          <div>
            <div className="container">
              <div className="row">
                {loading && (
                  <div style={{ textAlign: "center" }}>
                    <h1
                      style={{
                        fontSize: "calc(2vh + 1vw)",
                        textAlign: "center",
                      }}
                    >
                      Loading Blogs
                    </h1>
                  </div>
                )}
                {!loading &&
                  blogs.map(
                    e =>
                      e.categories.length != 0 && (
                        <div className="col-md-4">
                          <Card data={e} />
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Card = ({ data }) => {
  return (
    <div style={{ padding: "4px", borderStyle: "solid", marginBottom: 20 }}>
      <img
        alt={"BLOG"}
        src={data.thumbnail}
        style={{ width: "101%", padding: "5px", borderStyle: "none" }}
      />
      <hr />
      <h4 style={{ padding: "3px" }}>{data.title}</h4>
      <p style={{ opacity: "0.73", padding: "3px" }}>
        {parse(data.description).querySelector("p").innerHTML.slice(0, 200)}
        <br />
        <a style={{ fontWeight: "bold" }} href={data.link}>
          Read More...{" "}
        </a>
      </p>
    </div>
  )
}
