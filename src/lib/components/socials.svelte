<script>
  import { socialsStore } from '$stores/site-metadata'
  import Facebook from './icons/facebook.svelte'
  import Instagram from './icons/instagram.svelte'
  import TikTok from './icons/tik-tok.svelte'
  import Twitter from './icons/twitter.svelte'

  export let textColor = 'primary'

  const { facebook, instagram, tikTok, twitter } = $socialsStore

  textColor ? textColor : (textColor = 'secondary')
</script>

<div class="flex justify-center my-3 space-x-4">
  <a href={facebook} class="cursor-pointer">
    <Facebook {textColor} />
  </a>
  <a href={twitter} class="cursor-pointer">
    <Twitter {textColor} />
  </a>
  <a href={instagram} class="cursor-pointer">
    <Instagram {textColor} />
  </a>
  <a href={tikTok} class="cursor-pointer">
    <TikTok {textColor} />
  </a>
</div>
