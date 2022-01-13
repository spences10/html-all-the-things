<script>
  import Socials from './socials.svelte'
</script>

<footer class="p-10 footer bg-primary text-primary-content text-xl">
  <div class="flex flex-col">
    <img
      src="/a_hatt_logo_transparency_white-p-500.png"
      alt="html all the things"
      class="w-1/2"
    />
    <Socials textColor="secondary" />
  </div>
  <div>
    <span class="footer-title">Podcast</span>
    <a
      href="https://www.htmlallthethings.com/landing/podcast"
      class="link link-hover">Listen Right Now!</a
    >
    <a href="/contact" class="link link-hover">Be a Podcast Guest</a>
  </div>
  <div>
    <span class="footer-title">Blog</span>
    <a href="/posts" class="link link-hover">Check it out!</a>
    <a href="/contact" class="link link-hover">Be a Guest Writer</a>
  </div>
  <div>
    <span class="footer-title">Contact</span>
    <a href="/contact" class="link link-hover">Email Us</a>
    <a href="/contact" class="link link-hover">Advertise with Us</a>
  </div>
</footer>
