import { client } from '$lib/graphql-client'
import { podcastQuery } from '$lib/graphql-queries'

export const load = async ({ params }) => {
  const { slug } = params
  const variables = { slug }
  const { podcast } = await client.request(podcastQuery, variables)

  return {
    podcast,
  }
}
