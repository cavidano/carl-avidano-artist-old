import React, { Fragment } from 'react';

import { graphql } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

export default function Home({data}) {
  
  const entries = data.craftApi.entries;
  
  const myEntries = entries.map((entry, index) => {

    const title = entry.title;
    const category = entry.artworkCategory;
    const imageUrl = entry.artworkImage[0].url;

    console.log(imageUrl)

    return (
      <Fragment>
        <p>{title} <br /> {category}</p>
        <img src={imageUrl} alt="" />
        </Fragment>
    );
})

  return (
    <div className="cool">
      {myEntries}
    </div>
  )
}

export const query = graphql`
  query {
    craftApi {
      entries {
        title
        ... on CraftAPI_work_artworkShowcase_Entry {
          artworkDescription
          artworkCategory
          artworkImage {
            url
          }
        }
      }
    }
  }
`;
