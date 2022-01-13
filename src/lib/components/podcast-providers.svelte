<script>
  import Apple from './icons/apple.svelte'
  import Google from './icons/google.svelte'
  import PodBean from './icons/pod-bean.svelte'
  import Rss from './icons/rss.svelte'
  import Spotify from './icons/spotify.svelte'

  export let podcastProviders
</script>

<div class="flex justify-center flex-col text-center">
  <p class="text-xl mb-5">Also available on...</p>

  <div class="flex justify-evenly mb-3">
    <a
      href={podcastProviders[0].spotify}
      target="_blank"
      class="btn btn-primary"
    >
      <Spotify />
      <span class="ml-3">Spotify</span>
    </a>

    <a
      href={podcastProviders[0].apple}
      target="_blank"
      class="btn btn-primary"
    >
      <Apple />
      <span class="ml-3">Apple</span>
    </a>

    <a
      href={podcastProviders[0].google}
      target="_blank"
      class="btn btn-primary"
    >
      <Google />
      <span class="ml-3">Google</span>
    </a>

    <a
      href={podcastProviders[0].podBean}
      target="_blank"
      class="btn btn-primary"
    >
      <PodBean />
      <span class="ml-3">PodBean</span>
    </a>

    <a
      href={podcastProviders[0].rss}
      target="_blank"
      class="btn btn-primary"
    >
      <Rss />
      <span class="ml-3">RSS</span>
    </a>
  </div>

  <p class="text-xl mb-16">
    ...and many more, check your podcast app!
  </p>
</div>
