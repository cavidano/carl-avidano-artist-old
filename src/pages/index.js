import React, { Fragment } from 'react';

import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Home = ({ data }) => {

  const artworkList = data.allArtwork.nodes;
  
  const artwork = artworkList.map((entry, index) => {

    const title = entry.title;
    const category = entry.artworkCategory;
    const image = entry.image.url;

    console.log(image)

    return (
      <Fragment>
        <p>{title} <br /> {category}</p>
        <GatsbyImage alt="" image={getImage(image)} />
      </Fragment>
    );
  });

  return (
    <Fragment>

    <div className="container narrow">
      {artwork}
    </div>
    </Fragment>
  )
}

export const query = graphql`
  query queryArtwork {
    allArtwork {
      nodes {
        id
        title
        artworkCategory
        image {
          url {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default Home;