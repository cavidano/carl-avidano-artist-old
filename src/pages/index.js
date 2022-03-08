import React from "react";

   
import { graphql } from "gatsby";

export default function Home({data}) {
  
  const entries = data.craftApi.entries;

  const myEntries = entries.map((entry, index) => {

    let title = entry.title;

    return (
        <p>{title}</p>
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
      }  
    }
  }
`;
