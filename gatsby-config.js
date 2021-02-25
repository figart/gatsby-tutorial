/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Mark Figart",
    description: "An examination of life",
    author: "@figart",
    someData: "item1, item2, item3",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1o788oecdyv3`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `CzZNJsFaFYh31bVSvCxjLoXd6GTxHBTfiHwZI936qbk`,}
    },
  ],
}
