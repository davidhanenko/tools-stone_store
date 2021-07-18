// import { InMemoryCache } from '@apollo/client/cache';
// import { ApolloClient } from '@apollo/client/core';
// import gql from 'graphql-tag';

// const client = new ApolloClient({
//   uri: 'http://localhost:1337/graphql',
//   cache: new InMemoryCache(),
//   connectToDevTools: true,
// });

// const media = [];

// client
//   .query({
//     query: gql`
//       {
//         mPage {
//           image_1 {
//             id
//             url
//           }
//           image_2 {
//             id
//             url
//           }
//         }
//       }
//     `,
//   })
//   .then((response) =>
//     media.push(
//       response.data.mPage.image_1[0].url,
//       response.data.mPage.image_2[0].url
//     )
//   )
//   .catch((err) => console.error(err));

// export { media };
// export const mediaByIndex = (index) => media[index % media.length];
