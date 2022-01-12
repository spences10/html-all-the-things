<script>
  import Header from '$lib/components/header.svelte'
  import Facebook from '$lib/components/icons/facebook.svelte'
  import Instagram from '$lib/components/icons/instagram.svelte'
  import TikTok from '$lib/components/icons/tik-tok.svelte'
  import Twitter from '$lib/components/icons/twitter.svelte'
  import Nav from '$lib/components/nav.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  onMount(async () => {
    themeChange(false)
  })
</script>

<div class="flex justify-center">
  <Facebook />
  <Twitter />
  <Instagram />
  <TikTok />
</div>
<Header />
<Nav />
<main class="container max-w-3xl mx-auto px-4 mb-20">
  <slot />
</main>
