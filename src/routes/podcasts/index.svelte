<script context="module">
  import PodcastCard from '$components/podcast-card.svelte'
  import { client } from '$lib/graphql-client'
  import { allPodcasts } from '$lib/graphql-queries'
  export const load = async () => {
    const { podcasts } = await await client.request(allPodcasts)

    return {
      props: {
        podcasts,
      },
    }
  }
</script>

<script>
  export let podcasts
</script>

<div class="flex flex-col mb-10 tracking-widest font-black">
  <h1 class="text-4xl text-center mb-3">
    <span class="text-primary">&lt;</span> Podcast
    <span class="text-primary">/&gt;</span>
  </h1>
  <h2 class="text-center">New episodes, every week!</h2>
</div>

<div
  class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:-mx-32 xl:-mx-72 mb-100"
>
  {#each podcasts as { title, coverImage: { url }, slug, excerpt, released }}
    <PodcastCard {title} {url} {slug} {excerpt} {released} />
  {/each}
</div>
