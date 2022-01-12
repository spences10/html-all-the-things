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

export const podcastsDetails = gql`
  query GetPodcasts {
    podcasts(first: 6) {
      title
      slug
      excerpt
      released
      coverImage {
        url
      }
    }
  }
`

export const socialsDetails = gql`
  query GetSocials {
    socialLinks {
      facebook
      instagram
      tikTok
      twitter
    }
  }
`
