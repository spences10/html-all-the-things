<script context="module">
  import PodcastCard from '$components/podcast-card.svelte'
  import PostCard from '$lib/components/post-card.svelte'
  import { client } from '$lib/graphql-client'
  import { podcastsDetails,postsDetails } from '$lib/graphql-queries'
  export const load = async () => {
    const [postsRes, podcastsRes] = await Promise.all([
      client.request(postsDetails),
      client.request(podcastsDetails),
    ])
    const { posts } = postsRes
    const { podcasts } = podcastsRes

    return {
      props: {
        posts,
        podcasts,
      },
    }
  }
</script>

<script>

  export let posts
  export let podcasts
</script>

<div
  class="grid gap-4 md:grid-cols-3 md:px-10 lg:grid-cols-3 lg:-mx-52 mb-10"
>
  {#each posts as { title, coverImage: { url }, slug, authors, published }}
    <PostCard {title} {url} {slug} {authors} {published} />
  {/each}
</div>

<h2 class="text-2xl">Our Podcast</h2>
<div class="divider mb-10" />

<div
  class="grid gap-4 md:grid-cols-3 md:px-10 lg:grid-cols-3 lg:-mx-52 mb-10"
>
  {#each podcasts as { title, coverImage: { url }, slug, excerpt, released }}
    <PodcastCard {title} {url} {slug} {excerpt} {released} />
  {/each}
</div>
