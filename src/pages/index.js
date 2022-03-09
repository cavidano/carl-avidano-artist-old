import React from 'react';

import { graphql } from 'gatsby';

export default function Home({data}) {
  
  const entries = data.craftApi.entries;

  const myEntries = entries.map((entry, index) => {

    let title = entry.titlye;
    let category = entry.artworkCategory;
    let image = entry.artworkImage.url;

    console.log(image)

    return (
        <p>Hello??? {title}, {category}</p>
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
