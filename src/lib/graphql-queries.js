import { gql } from 'graphql-request'

export const postsDetails = gql`
  query GetHeroPosts {
    posts(first: 6) {
      title
      slug
      published
      coverImage {
        url
      }
      authors {
        name
      }
    }
  }
`
