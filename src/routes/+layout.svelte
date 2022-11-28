<script>
  import { browser } from '$app/environment'
  import { page } from '$app/stores'
  import Footer from '$components/footer.svelte'
  import {
    PUBLIC_FATHOM_ID,
    PUBLIC_FATHOM_URL,
  } from '$env/static/public'
  import Header from '$lib/components/header.svelte'
  import Nav from '$lib/components/nav.svelte'
  import Socials from '$lib/components/socials.svelte'
  import * as Fathom from 'fathom-client'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'
  onMount(async () => {
    themeChange(false)
    Fathom.load(PUBLIC_FATHOM_ID, {
      url: PUBLIC_FATHOM_URL,
      excludedDomains: ['localhost'],
    })
  })

  $: $page.pathname, browser && Fathom.trackPageview()
</script>

<Socials />
<Header />
<Nav />
<main class="container max-w-3xl mx-auto px-4 mb-20">
  <slot />
</main>
<Footer />
