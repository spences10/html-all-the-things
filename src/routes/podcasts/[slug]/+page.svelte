<script>
  import { page } from '$app/stores'
  import PodcastProviders from '$components/podcast-providers.svelte'
  import { description, name, siteUrl } from '$lib/config'
  import { marked } from 'marked'
  import { Head } from 'svead'
  import { Spotify } from 'sveltekit-embed'

  export let data
  let { podcast } = data

  const {
    title,
    excerpt,
    showNotes,
    recorded,
    released,
    podcastProviders,
  } = podcast
</script>

<Head
  title={`${podcast.title} · ${name}`}
  {description}
  image="%svelte.assets%/a_hatt_logo_transparency_white-p-500"
  url={`${siteUrl}${$page.url.pathname}`}
/>

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

<Spotify
  spotifyLink={podcastProviders[0].spotify.replace(
    'https://open.spotify.com/',
    ''
  )}
  width="100%"
  height="180px"
/>

<PodcastProviders {podcastProviders} />

<h2 class="text-2xl">Show Notes</h2>
<div class="divider" />

<article
  class="prose prose-lg prose-headings:text-secondary prose-a:text-secondary hover:prose-a:text-primary"
>
  {@html marked(showNotes)}
</article>
