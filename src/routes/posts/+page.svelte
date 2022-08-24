<script>
  import { page } from '$app/stores'
  import PostCard from '$lib/components/post-card.svelte'
  import { description, name, siteUrl } from '$lib/config'
  import { Head } from 'svead'

  export let data
  let { posts } = data
</script>

<Head
  title={`Blogs & Articles · ${name}`}
  {description}
  image="%svelte.assets%/a_hatt_logo_transparency_white-p-500"
  url={`${siteUrl}${$page.url.pathname}`}
/>

<div class="flex flex-col mb-10 tracking-widest font-black">
  <h1 class="text-4xl text-center mb-3">
    <span class="text-primary">&lt;</span> Articles
    <span class="text-primary">/&gt;</span>
  </h1>
  <h2 class="text-center">
    Web development. Web Design. Small Business.
  </h2>
</div>

<div
  class="grid gap-4 md:gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:-mx-32 xl:-mx-72 mb-10"
>
  {#each posts as { title, coverImage: { url }, slug, authors, published }}
    <PostCard {title} {url} {slug} {authors} {published} />
  {/each}
</div>
