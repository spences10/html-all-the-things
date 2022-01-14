<script context="module">
  export const load = async ({ url, params }) => {
    console.log('=====================')
    console.log(url)
    console.log(params)
    console.log('=====================')
    return {
      props: {
        key: url.pathname,
      },
    }
  }
</script>

<script>
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  import Footer from '$components/footer.svelte'
  import PageTransition from '$components/page-transition.svelte'
  import Header from '$lib/components/header.svelte'
  import Nav from '$lib/components/nav.svelte'
  import Socials from '$lib/components/socials.svelte'
  import * as Fathom from 'fathom-client'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  export let key

  onMount(async () => {
    themeChange(false)
    Fathom.load(import.meta.env.VITE_FATHOM_ID, {
      url: import.meta.env.VITE_FATHOM_URL,
      excludedDomains: ['localhost'],
    })
  })

  $: $page.pathname, browser && Fathom.trackPageview()
</script>

<Socials />
<Header />
<Nav />
<PageTransition refresh={key}>
  <main class="container max-w-3xl mx-auto px-4 mb-20">
    <slot />
  </main>
</PageTransition>
<Footer />
