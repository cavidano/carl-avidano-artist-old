// url: `https://manage.carlavidano.com/images/uploads/work/self-portrait-at-computer.jpg`

// const { createRemoteFileNode } = require('gatsby-source-filesystem');

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode, createNodeField },
//   createNodeId,
//   getCache,
// }) => {
//     const fileNode = await createRemoteFileNode({
//         url: `https://manage.carlavidano.com/images/uploads/work/self-portrait-at-computer.jpg`,
//         parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//         createNode, // helper function in gatsby-node to generate the node
//         createNodeId, // helper function in gatsby-node to generate the node id
//         getCache,
//     });

//     // if the file was created, extend the node with "localFile"
//     if (fileNode) {
//         createNodeField({ node, name: "localFile", value: fileNode.id });
//     }
// }