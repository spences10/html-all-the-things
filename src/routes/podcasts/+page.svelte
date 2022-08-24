<script>
  import { page } from '$app/stores'
  import PodcastCard from '$components/podcast-card.svelte'
  import { description, name, siteUrl } from '$lib/config'
  import { Head } from 'svead'

  export let data
  let { podcasts, posts } = data
</script>

<Head
  title={`Web Dev Podcast · ${name}`}
  {description}
  image="%svelte.assets%/a_hatt_logo_transparency_white-p-500"
  url={`${siteUrl}${$page.url.pathname}`}
/>

<div class="flex flex-col mb-10 tracking-widest font-black">
  <h1 class="text-4xl text-center mb-3">
    <span class="text-primary">&lt;</span> Podcast
    <span class="text-primary">/&gt;</span>
  </h1>
  <h2 class="text-center">New episodes, every week!</h2>
</div>

<div
  class="grid gap-4 md:gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:-mx-32 xl:-mx-72 mb-100"
>
  {#each podcasts as { title, coverImage: { url }, slug, excerpt, released }}
    <PodcastCard {title} {url} {slug} {excerpt} {released} />
  {/each}
</div>
