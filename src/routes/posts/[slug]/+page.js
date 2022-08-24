import { page } from '$app/stores'
import { description, name, siteUrl } from '$lib/config'
import { client } from '$lib/graphql-client'
import { postQuery } from '$lib/graphql-queries'
import { marked } from 'marked'
import { Head } from 'svead'

export const load = async ({ params }) => {
  const { slug } = params
  const variables = { slug }
  const { post } = await client.request(postQuery, variables)

  return {
  post,
}
}
