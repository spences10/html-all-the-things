import { client } from '$lib/graphql-client'
import { socialsDetails } from '$lib/graphql-queries'
import { writable } from 'svelte/store'

export const socialsStore = writable({})

const fetchSocials = async () => {
  const { socialLinks } = await client.request(socialsDetails)

  return socialLinks[0]
}

socialsStore.set(fetchSocials())
