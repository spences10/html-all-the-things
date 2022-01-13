<script context="module">
  import PodcastProviders from '$components/podcast-providers.svelte'
  import SpotifyPlayer from '$components/spotify-player.svelte'
  import { client } from '$lib/graphql-client'
  import { podcastQuery } from '$lib/graphql-queries'
  import { marked } from 'marked'

  export const load = async ({ params }) => {
    const { slug } = params
    const variables = { slug }
    const { podcast } = await client.request(podcastQuery, variables)

    return {
      props: {
        podcast,
      },
    }
  }
</script>

<script>
  export let podcast

  const {
    title,
    excerpt,
    showNotes,
    recorded,
    released,
    podcastProviders,
  } = podcast
</script>

<div class="prose prose-xl">
  <h1>{title}</h1>
</div>

<div
  class="flex text-lg text-secondary tracking-wide font-thin mt-3 mb-10"
>
  <p class="mr-3">
    Recorded: <span class="text-primary"
      >{new Date(recorded).toDateString()}</span
    >
  </p>
  <p class="">
    Released: <span class="text-primary"
      >{new Date(released).toDateString()}</span
    >
  </p>
</div>

<article
  class="prose prose-lg prose-headings:text-secondary prose-a:text-secondary hover:prose-a:text-primary mb-10"
>
  {@html marked(excerpt)}
</article>

<h2 class="text-2xl">Listen</h2>
<div class="divider" />

<SpotifyPlayer spotifyLink={podcastProviders[0].spotify} />

<PodcastProviders {podcastProviders} />

<h2 class="text-2xl">Show Notes</h2>
<div class="divider" />

<article
  class="prose prose-lg prose-headings:text-secondary prose-a:text-secondary hover:prose-a:text-primary"
>
  {@html marked(showNotes)}
</article>
