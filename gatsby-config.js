/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raja Osama`,
        short_name: `RajaOsama 😎`,
        start_url: `/`,
        background_color: `#090909`,
        theme_color: `#090909`,
        display: `standalone`,
        icon: `src/icon512x512.png`,
      },
    },

    "gatsby-plugin-offline",
  ],
}
