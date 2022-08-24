import { client } from '$lib/graphql-client'
import { allPosts } from '$lib/graphql-queries'
export const load = async () => {
  const { posts } = await await client.request(allPosts)

  return {
    posts,
  }
}
