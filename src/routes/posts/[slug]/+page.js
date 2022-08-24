import { client } from '$lib/graphql-client'
import { postQuery } from '$lib/graphql-queries'

export const load = async ({ params }) => {
  const { slug } = params
  const variables = { slug }
  const { post } = await client.request(postQuery, variables)

  return {
    post,
  }
}
