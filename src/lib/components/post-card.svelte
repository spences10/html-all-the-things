<script>
  export let url = ''
  export let title = ''
  export let slug = ''
  export let authors = ''
  export let published = ''
</script>

<div class="relative card shadow-2xl h-[300px]">
  <img src={url} alt={title} class="object-cover h-full" />
  <a href={`/posts/${slug}`}>
    <div
      class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-base-300 text-neutral-content"
    >
      <h2 class="font-bold lg:text-xl text-neutral-content mb-3">
        {title}
      </h2>
      <p class="flex justify-between">
        <span>{published}</span>
        <span>{authors[0].name}</span>
      </p>
    </div>
  </a>
</div>
