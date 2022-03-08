/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "CraftAPI",
        fieldName: "craftApi",
        url: "https://manage.carlavidano.com/api",
        headers: {
          Authorization: `Bearer pwRVQnLdpxjTF-idJy-XxOUhMEoCReKL`,
        },
        refetchInterval: 60
      },
    }
  ]
}