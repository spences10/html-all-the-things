import { page } from '$app/stores'
import PostCard from '$lib/components/post-card.svelte'
import { description, name, siteUrl } from '$lib/config'
import { client } from '$lib/graphql-client'
import { allPosts } from '$lib/graphql-queries'
import { Head } from 'svead'
export const load = async () => {
  const { posts } = await await client.request(allPosts)

  return {
  posts,
}
}
