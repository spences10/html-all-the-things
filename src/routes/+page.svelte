<script>
  import PodcastCard from '$components/podcast-card.svelte'
  import PostCard from '$lib/components/post-card.svelte'
  import { description, name, siteUrl } from '$lib/config'
  import { Head } from 'svead'

  export let data
  let { podcasts, posts } = data
</script>

<Head
  title={`${name} · ${description}`}
  {description}
  image="%svelte.assets%/a_hatt_logo_transparency_white-p-500"
  url={`${siteUrl}`}
/>

<div
  class="grid gap-4 md:gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:-mx-32 xl:-mx-72 mb-10"
>
  {#each posts as { title, coverImage: { url }, slug, authors, published }}
    <PostCard {title} {url} {slug} {authors} {published} />
  {/each}
</div>

<h2 class="text-2xl">Our Podcast</h2>
<div class="divider mb-10" />

<div
  class="grid gap-4 md:gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:-mx-32 xl:-mx-72 mb-100"
>
  {#each podcasts as { title, coverImage: { url }, slug, excerpt, released }}
    <PodcastCard {title} {url} {slug} {excerpt} {released} />
  {/each}
</div>
