/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
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
          // Authorization: Bearer QMbU6O6w_euSSCavC7-ACnBqdTfBe6t9
          Authorization: `Bearer QMbU6O6w_euSSCavC7-ACnBqdTfBe6t9`,
        }
      },
    }
  ]
}