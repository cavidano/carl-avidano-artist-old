/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 95
        }
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "CraftAPI",
        fieldName: "craftApi",
        url: "https://manage.carlavidano.com/api",
        headers: {
          Authorization: `Bearer ${process.env.AVIDANO_ART_API_KEY}`,
        }
      },
    }
  ]
}