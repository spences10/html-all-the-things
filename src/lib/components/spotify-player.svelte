<script>
  export let spotifyLink = ''
  export let width = '100%'
  export let height = 250

  const stripLink = link => {
    return link.replace('https://open.spotify.com/', '')
  }
</script>

<div class="mb-10">
  <iframe
    data-testid="spotify"
    title={`spotify-${stripLink(spotifyLink)}`}
    class="spotify-sveltekit-embed"
    src={`https://open.spotify.com/embed/${stripLink(spotifyLink)}`}
    {width}
    {height}
    frameBorder="0"
    allow="encrypted-media"
  />
</div>
