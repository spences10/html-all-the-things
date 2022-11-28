<script>
  import Menu from './icons/menu.svelte'
  import ThemeSelect from './theme-select.svelte'
</script>

<div
  class="navbar mb-10 shadow-lg bg-primary text-primary-content sticky top-0 z-10"
>
  <div class="px-2 mx-2 navbar-start" />

  <div class="dropdown dropdown-right lg:hidden">
    <div class="m-1 btn bg-secondary"><Menu /></div>
    <ul
      class="bg-secondary rounded-box shadow text-primary-content p-2 w-52 menu dropdown-content "
    >
      <a href="/" class="btn btn-ghost btn-sm rounded-btn"> Home </a>
      <a
        data-sveltekit-prefetch
        href={`/posts`}
        class="rounded-btn btn btn-ghost btn-sm">Posts</a
      >
      <a
        data-sveltekit-prefetch
        href={`/podcasts`}
        class="rounded-btn btn btn-ghost btn-sm">Podcasts</a
      >
      <a
        data-sveltekit-prefetch
        href={`/contact`}
        class="rounded-btn btn btn-ghost btn-sm">Contact</a
      >
    </ul>
  </div>
  <div class="mx-2 px-2 hidden navbar-center lg:flex">
    <div class="flex items-stretch">
      <a href="/" class="btn btn-ghost btn-sm rounded-btn"> Home </a>
      <a
        data-sveltekit-prefetch
        href={`/posts`}
        class="rounded-btn btn btn-ghost btn-sm">Posts</a
      >
      <a
        data-sveltekit-prefetch
        href={`/podcasts`}
        class="rounded-btn btn btn-ghost btn-sm">Podcasts</a
      >
      <a
        data-sveltekit-prefetch
        href={`/contact`}
        class="rounded-btn btn btn-ghost btn-sm">Contact</a
      >
    </div>
  </div>

  <div class="navbar-end">
    <ThemeSelect />
  </div>
</div>
