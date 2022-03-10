import React, { Fragment } from 'react';

// import { useStaticQuery, graphql } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Home({data}) {

  // const {
  //   artwork: { image }
  // } = useStaticQuery(graphql`
  //   query {
  //     artwork {
  //       id
  //       image {
  //         url {
  //           childImageSharp {
  //             gatsbyImageData
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  
  // const entries = data.craftApi.entries;
  
  // const myEntries = entries.map((entry, index) => {

  //   const title = entry.title;
  //   const category = entry.artworkCategory;
  //   const imageUrl = entry.artworkImage[0].url;

  //   console.log(imageUrl)

  //   return (
  //     <Fragment>
  //       <p>{title} <br /> {category}</p>
  //       <img src={imageUrl} alt="" width="500px" />
  //       </Fragment>
  //   );
  // });

  return (
    <div className="cool">
      {/* {myEntries} */}
      {/* <GatsbyImage alt="COOL" image={getImage(image.url)} /> */}
    </div>
  )
}

// export const query = graphql`
//   query {
//     craftApi {
//       entries {
//         title
//         ... on CraftAPI_work_artworkShowcase_Entry {
//           artworkDescription
//           artworkCategory
//           artworkImage {
//             url
//           }
//         }
//       }
//     }
//   }
// `;
