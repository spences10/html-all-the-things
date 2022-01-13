<script>
  export let height = '32px'
  export let width = '32px'
  export let textColor = ''
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-hidden="true"
  role="img"
  class={textColor === 'primary'
    ? `text-primary hover:text-primary-focus`
    : `text-secondary hover:text-secondary-focus`}
  {width}
  {height}
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 24 24"
  ><path
    d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
    fill="currentColor"
  /></svg
>
