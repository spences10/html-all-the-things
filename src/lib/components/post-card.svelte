<script>
  export let url = ''
  export let title = ''
  export let slug = ''
  export let authors = ''
  export let published = ''
</script>

<div class="relative card shadow-2xl">
  <img src={url} alt={title} class="object-cover h-full" />
  <a href={`/posts/${slug}`}>
    <div
      class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-base-300 text-neutral-content"
    >
      <h2 class="font-bold lg:text-xl">{title}</h2>
      {authors[0].name}
      {published}
    </div>
  </a>
</div>
