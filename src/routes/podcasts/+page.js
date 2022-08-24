import { client } from '$lib/graphql-client'
import { allPodcasts } from '$lib/graphql-queries'
export const load = async () => {
  const { podcasts } = await await client.request(allPodcasts)

  return {
    podcasts,
  }
}
