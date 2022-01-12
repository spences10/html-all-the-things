<script>
  export let url = ''
  export let title = ''
  export let slug = ''
  export let excerpt = ''
  export let released = ''

  import { marked } from 'marked'
</script>

<div class="card shadow-2xl">
  <figure>
    <img src={url} alt={title} class="object-cover h-full" />
  </figure>
  <a href={`/podcasts/${slug}`}>
    <div class="card-body">
      <h2 class="font-bold lg:text-xl text-neutral-content mb-3">
        {title}
      </h2>
      <span>{released}</span>
      <span>{@html marked(excerpt.slice(0, 180))}</span>
    </div>
  </a>
</div>
