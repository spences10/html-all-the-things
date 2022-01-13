<script context="module">
  import PostCard from '$lib/components/post-card.svelte'
  import { client } from '$lib/graphql-client'
  import { allPosts } from '$lib/graphql-queries'
  export const load = async () => {
    const { posts } = await await client.request(allPosts)

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  export let posts
</script>

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
