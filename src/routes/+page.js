import { client } from '$lib/graphql-client'
import {
  heroPodcastsDetails,
  heroPostsDetails,
} from '$lib/graphql-queries'

export const load = async () => {
  const [postsRes, podcastsRes] = await Promise.all([
    client.request(heroPostsDetails),
    client.request(heroPodcastsDetails),
  ])
  const { posts } = postsRes
  const { podcasts } = podcastsRes

  return {
    posts,
    podcasts,
  }
}
