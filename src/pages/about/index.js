import React, { useEffect } from "react"
import { useGlobal } from "../../utils/context"
import "./../../styles/global.css"
import self from "./../../assets/img/self.jpg"
import asp from "./../../assets/icons/asp.png"
import c from "./../../assets/icons/c.png"
import csharp from "./../../assets/icons/c#.png"
import dart from "./../../assets/icons/dart.png"
import django from "./../../assets/icons/django.png"
import electron from "./../../assets/icons/electron.png"
import firebase from "./../../assets/icons/firebase.png"
import flutter from "./../../assets/icons/flutter.png"
import graphql from "./../../assets/icons/graphql.png"
import java from "./../../assets/icons/java.png"
import javascript from "./../../assets/icons/javascript.png"
import laravel from "./../../assets/icons/laravel.png"
import medium from "./../../assets/icons/medium.png"
import mysql from "./../../assets/icons/mysql.png"
import php from "./../../assets/icons/php.png"
import python from "./../../assets/icons/python.png"
import mongo from "./../../assets/icons/mongo.png"
import reactnative from "./../../assets/icons/reactnative.png"
import sass from "./../../assets/icons/sass.png"
import sql from "./../../assets/icons/sql.png"
import vercel from "./../../assets/icons/vercel.png"
import vue from "./../../assets/icons/vue.png"
import react from "./../../assets/icons/react.png"
import gatsby from "./../../assets/icons/gatsby.png"
import next from "./../../assets/icons/next.png"
import twitter from "./../../assets/icons/twitter.png"
import linkedin from "./../../assets/icons/linkedin.png"
import github from "./../../assets/icons/github.png"
import Lottie from "react-lottie"

import Anim from "./../../styles/animation.json"
import { Helmet } from "react-helmet"
const About = () => {
  const [pagedata, setPageData] = useGlobal()
  useEffect(() => {
    setPageData({ title: "ABOUT" })
  }, [])
  return (
    <div
      className="d-flex flex-column align-items-center "
      style={{
        height: "100%",
        marginTop: "70px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Helmet>
        <title>Raja Osama | About Me</title>
      </Helmet>
      <div
        className={"disable-scrollbars"}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          fontFamily: "'Maven Pro', sans-serif",
          // textAlign: "center",
          overflow: "auto",
        }}
      >
        <div>
          <div className={"row"}>
            <div className={"col"}>
              <h1 style={{ fontWeight: "bold" }}>
                <span>
                  <span style={{ fontSize: 49 }}>Raja Osama</span>
                </span>
              </h1>
              <br />
              <p>
                <span style={{ opacity: 0.6, fontSize: 21 }}>
                  Full Stack Software Engineering{" "}
                </span>
              </p>
            </div>
            <div className={"col"}>
              {/* <img src={self} style={{ width: 300 }} /> */}
            </div>
          </div>
        </div>
        <br />
        <h2 style={{ fontSize: 25, fontWeight: "bold" }}>Introduction</h2>
        <br />

        <span
          style={{
            fontSize: "20px",
            opacity: "0.8",
            lineHeight: 1.4,
          }}
        >
          Hey, I'm Raja Osama 👋
          <br />
          <br />
          <div className="row">
            <div className="col-md-9">
              I'm a creative product designer that creates products with a keen
              interest in programming and video games.
              <br />
              <br />
              Since I was 12 years old, I love programming, working with
              different technologies and programming languages like c#, java
              PHP, and javascript, developing some cool open-source projects,
              and writing technical blogs on Medium.
              <br />
              <br />
              I can adapt any new tools and technologies when needed. I just
              like exploring the latest and the greatest technologies as they
              launch, and that way, it keeps me excited and motivated.
              <br />
              <br />
              Started programming because of gamming; when I was 12, I got
              curious about all these website sharing games over the internet,
              and that keen my interest in web development eventually. I started
              taking an online course for web development, where I learn PHP and
              HTML, CSS, javascript. After some years of blogging over bloggers,
              I enrolled in a software engineering program after completing high
              school.
            </div>
            <div className="col-md-3">
              {/* <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: Anim,
                  rendererSettings: {},
                }}
              /> */}
              <img src={self} style={{ width: 300 }} />
            </div>
          </div>
          I'm usually focused on:
          <br />
          🎛️&nbsp;&nbsp;Designing great User interfaces. experience <br />
          🌐&nbsp;&nbsp;Developing full-stack websites that scales
          <br /> ✨&nbsp;&nbsp;Developing backend and structuring databases.
          <br /> 🧰&nbsp;&nbsp;Building Libraries and writing Technical blogs.
          <br />
          <br />
          In my work, I value:
          <br />
          ⏱️&nbsp;&nbsp;Efficiency
          <br />
          🎯&nbsp;&nbsp;Consistency
          <br />
          ♻️&nbsp;&nbsp;Reusability
          <br />
          ⚙️&nbsp;&nbsp;Systems
          <br />
          📋&nbsp;&nbsp;Standards
          <br /> 🤖Automation
          <br />
          💠&nbsp;&nbsp;Modular Design
          <br />
          👍&nbsp;&nbsp;Emoji Lists
          <br />
          <br />
          <h2 style={{ fontSize: 25, fontWeight: "bold" }}>Uses</h2>
          I'm Frequently asked about the stack I use, so here's a complete list.
          <br />
          <br />
          Prefered web stack
          <br />
          <br />
          <img src={react} style={{ width: 20 }} />
          &nbsp;&nbsp; React - Ui Library
          <br />
          <img src={next} style={{ width: 20 }} />
          &nbsp;&nbsp; Next.js - React Framework
          <br />
          <img src={gatsby} style={{ width: 20 }} />
          &nbsp;&nbsp; Gatsby - React Framework
          <br />
          <img src={vue} style={{ width: 20 }} />
          &nbsp;&nbsp; Vue.js - Framework
          <br />
          <img src={vercel} style={{ width: 20 }} />
          &nbsp;&nbsp; Vercel - Static / Serverless Deployment / Mico services &
          CDN
          <br />
          <img src={react} style={{ width: 20 }} /> &nbsp;&nbsp;Node.js -
          Javascript based Backend
          <br />
          <img src={graphql} style={{ width: 20 }} />
          &nbsp;&nbsp; GraphQL - data query and manipulation language
          <br />
          <br />
          Prefered cross platform stack
          <br />
          <img src={reactnative} style={{ width: 20 }} />
          &nbsp;&nbsp; React-Native - Cross-platform development Mobile
          framework
          <br />
          <img src={flutter} style={{ width: 20 }} />
          &nbsp;&nbsp; Flutter - Cross-platform development Mobile framework
          <br />
          <img src={electron} style={{ width: 20 }} />
          &nbsp;&nbsp; Electron - Cross-platform Desktop App development
          framework
          <br />
          <img src={firebase} style={{ width: 20 }} />
          &nbsp;&nbsp; Firebase - Serverless Backend
          <br />
          <img src={react} style={{ width: 20 }} />
          &nbsp;&nbsp; Node.js - Javascript Backend <br />
          <br />
          <br />
          I Also Work with
          <br />
          <br />
          <img src={laravel} style={{ width: 20 }} />
          &nbsp;&nbsp; Laravel - PHP framework
          <br />
          <img src={asp} style={{ width: 20 }} />
          &nbsp;&nbsp; asp.Net - C# based web development Framework
          <br />
          <img src={mongo} style={{ width: 20 }} />
          &nbsp;&nbsp; MongoDB - NoSQL Database
          <br />
          <img src={django} style={{ width: 20 }} />
          &nbsp;&nbsp; django - Python based
          <br />
          <img src={sql} style={{ width: 20 }} />
          &nbsp;&nbsp; SQL - SQL Database
          <br />
          <img src={mysql} style={{ width: 20 }} />
          &nbsp;&nbsp; MySQL - SQL Database
          <br />
          <img src={sass} style={{ width: 20 }} />
          &nbsp;&nbsp; Sass - StyleSheet language
          <br />
          <br />
          Languages I learned
          <br />
          <br />
          <img src={csharp} style={{ width: 20 }} />
          &nbsp;&nbsp; C#
          <br />
          <img src={php} style={{ width: 20 }} />
          &nbsp;&nbsp; PHP
          <br />
          <img src={javascript} style={{ width: 20 }} />
          &nbsp;&nbsp; Javascript
          <br />
          <img src={java} style={{ width: 20 }} />
          &nbsp;&nbsp; Java
          <br />
          <img src={dart} style={{ width: 20 }} /> &nbsp;&nbsp;Dart
          <br />
          <img src={c} style={{ width: 20 }} /> &nbsp;&nbsp;C
          <br />
          <img src={sql} style={{ width: 20 }} /> &nbsp;&nbsp;SQL
          <br />
          <img src={graphql} style={{ width: 20 }} /> &nbsp;&nbsp;GraphQL
          <br />
          <img src={python} style={{ width: 20 }} /> &nbsp;&nbsp;Python
          <br />
          <br />
          <br />
          Blog
          <br />
          <br />
          <img src={medium} style={{ width: 20 }} />
          &nbsp;&nbsp; Medium
          <br />
          <br />
          <hr />
          <br />
          <br />
          Follow me on <img src={twitter} style={{ width: 20 }} />
          &nbsp; Twitter,
          <img src={linkedin} style={{ width: 20 }} />
          &nbsp; Linkedin,
          <img src={github} style={{ width: 20 }} />
          &nbsp;Github.
          <br />
          Built with <span role="img">❤</span>,{" "}
          <img src={gatsby} style={{ width: 20 }} />
          &nbsp; Gatsby and <img src={vercel} style={{ width: 20 }} />
          &nbsp;Vercel
          <br />
          <br />
        </span>
      </div>
    </div>
  )
}

export default About
