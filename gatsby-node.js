const path = require(`path`)
var fs = require("fs")
const { default: fetch } = require("node-fetch")
/** @type { import("gatsby").GatsbyNode["createPages"] } */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  fetch("https://api.dksami.vercel.app/projects.json")
    .then(e => e.json())
    .then(data => {
      data.map((e, i) => {
        createPage({
          path: `/projects/project-${i + 1}/`,
          component: path.resolve(`./src/dynamicPages/project/index.js`),
          context: {
            data: e,
          },
        })
      })

      createPage({
        path: `/projects`,
        component: path.resolve(`./src/dynamicPages/work/index.js`),
        context: {
          data: data,
        },
      })
    })
    .catch(e => console.log(e))
}
