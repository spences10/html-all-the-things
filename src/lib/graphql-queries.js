import { gql } from 'graphql-request'

const POST_FRAGMENT = gql`
  fragment PostDetails on Post {
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
`

export const heroPostsDetails = gql`
  ${POST_FRAGMENT}
  query GetHeroPosts {
    posts(first: 6) {
      ...PostDetails
    }
  }
`

export const allPosts = gql`
  ${POST_FRAGMENT}
  query GetAllPosts {
    posts {
      ...PostDetails
    }
  }
`

export const postQuery = gql`
  ${POST_FRAGMENT}
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      ...PostDetails
      copy
    }
  }
`

const PODCAST_FRAGMENT = gql`
  fragment PodcastDetails on Podcast {
    title
    slug
    excerpt
    recorded
    released
    coverImage {
      url
    }
  }
`

export const heroPodcastsDetails = gql`
  ${PODCAST_FRAGMENT}
  query GetHeroPodcasts {
    podcasts(first: 6) {
      ...PodcastDetails
    }
  }
`

export const allPodcasts = gql`
  ${PODCAST_FRAGMENT}
  query AllPodcasts {
    podcasts {
      ...PodcastDetails
    }
  }
`

export const podcastQuery = gql`
  ${PODCAST_FRAGMENT}
  query GetPodcast($slug: String!) {
    podcast(where: { slug: $slug }) {
      ...PodcastDetails
      showNotes
      podcastProviders {
        spotify
        apple
        google
        podBean
        rss
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
