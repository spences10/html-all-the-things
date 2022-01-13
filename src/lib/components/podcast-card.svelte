<script>
  export let url = ''
  export let title = ''
  export let slug = ''
  export let excerpt = ''
  export let released = ''

  import { marked } from 'marked'
</script>

<div class="card shadow-2xl">
  <a href={`/podcasts/${slug}`}>
    <figure>
      <img src={url} alt={title} class="object-cover h-full" />
    </figure>
    <div class="card-body">
      <h2 class="font-bold text-2xl mb-3">
        {title}
      </h2>
      <span>{new Date(released).toDateString()}</span>
      <span>{@html marked(excerpt.slice(0, 180))}</span>
    </div>
  </a>
</div>
