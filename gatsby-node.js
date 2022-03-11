
const axios = require('axios');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.createSchemaCustomization = ({
  actions: { createTypes }
}) => {
  createTypes(`
    type artwork implements Node {
      image: artworkImage
    }
    type artworkImage @dontInfer {
      url: File @link(by: "url")
    }
  `);
};

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest
}) => {
  const { data } = await axios.get(
    `https://manage.carlavidano.com/api?api_key=${process.env.GATSBY_ART_API_KEY}`

    // `https://api.nasa.gov/planetary/apod?api_key=${process.env.GATSBY_NASA_API_KEY}`
  );

  console.log("MY DATA ==", data.JSON.stringify)

  createNode({
    ...data,
    id: createNodeId(data.date),
    internal: {
      type: 'artwork',
      contentDigest: createContentDigest(data)
    }
  });
};

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  cache,
  store
}) => {
  if (node.internal.type === 'artwork') {
    node.image = await createRemoteFileNode({
      url: node.url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store
    });
  }
};
