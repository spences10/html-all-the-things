<script>
  import { socialsStore } from '$stores/site-metadata'
  import Facebook from './icons/facebook.svelte'
  import Instagram from './icons/instagram.svelte'
  import TikTok from './icons/tik-tok.svelte'
  import Twitter from './icons/twitter.svelte'

  const { facebook, instagram, tikTok, twitter } = $socialsStore
</script>

<div class="flex justify-center my-3">
  <a href={facebook}>
    <Facebook />
  </a>
  <a href={twitter}>
    <Twitter />
  </a>
  <a href={instagram}>
    <Instagram />
  </a>
  <a href={tikTok}>
    <TikTok />
  </a>
</div>
