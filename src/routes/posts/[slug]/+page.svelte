<script>
  import { page } from '$app/stores'
  import { description, name, siteUrl } from '$lib/config'
  import { marked } from 'marked'
  import { Head } from 'svead'

  export let data
  let { post } = data

  const { title, published, coverImage, copy } = post
</script>

<Head
  title={`${post.title} · ${name}`}
  {description}
  image={coverImage.url}
  url={`${siteUrl}${$page.url.pathname}`}
/>

<div
  class="px-2 sm:-mx-2 md:-mx-4 lg:-mx-20 xl:-mx-48 2xl:-mx-64 mb-5"
>
  <img
    class="rounded-xl w-full"
    src={coverImage.url}
    alt={`Cover image for ${title}`}
  />
</div>

<div class="prose prose-xl">
  <h1>{title}</h1>
</div>

<p class="text-secondary tracking-widest font-semibold mt-3 mb-10">
  {new Date(published).toDateString()}
</p>

<article
  class="prose prose-lg prose-headings:text-secondary prose-a:text-secondary hover:prose-a:text-primary"
>
  {@html marked(copy)}
</article>
