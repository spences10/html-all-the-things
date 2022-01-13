<script>
  export let url = ''
  export let title = ''
  export let slug = ''
  export let authors = ''
  export let published = ''
</script>

<div class="card shadow-2xl">
  <a href={`/posts/${slug}`}>
    <figure>
      <img src={url} alt={title} class="h-52 object-cover" />
    </figure>
    <div class="card-body">
      <h2 class="font-bold text-xl mb-3">
        {title}
      </h2>
      <p class="flex justify-between">
        <span>{new Date(published).toDateString()}</span>
        <span>{authors[0].name}</span>
      </p>
    </div>
  </a>
</div>
