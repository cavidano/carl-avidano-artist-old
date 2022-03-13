const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

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
    `https://manage.carlavidano.com/api/artwork.json`
  );

  const artworkData = data.data;

  // console.log("MY DATA ==", artworkData);

  artworkData.forEach(element => {

    // console.log("MY EL ==", element);

    createNode({
      ...element,
      id: createNodeId(uuidv4()),
      internal: {
        type: 'artwork',
        contentDigest: createContentDigest(element)
      }
    });

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
      
      // console.log("I am node => ", node);
      
      node.image = await createRemoteFileNode({
      url: node.artworkImage,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store
    });
  }
};
