<script context="module">
  import Header from '$lib/components/header.svelte'
  import PostCard from '$lib/components/post-card.svelte'
  import { client } from '$lib/graphql-client'
  import { postsDetails } from '$lib/graphql-queries'
  export const load = async () => {
    const { posts } = await client.request(postsDetails)
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



<div
  class="grid gap-4 md:grid-cols-3 md:px-10 lg:grid-cols-3 lg:-mx-52"
>
  {#each posts as { title, coverImage: { url }, slug, authors, published }}
    <PostCard {title} {url} {slug} {authors} {published} />
  {/each}
</div>

<pre>{JSON.stringify(posts, null, 2)}</pre>
