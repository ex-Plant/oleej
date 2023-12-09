<script>
  import NewsletterMobile from "./NewsletterMobile.svelte";
  import NewsletterDesktop from "./NewsletterDesktop.svelte";
</script>

<footer
  class="mt-auto max-w-[1440px] xl:mx-auto border-t-black border-[1px] md:flex justify-between items-center w-full  ">
    <NewsletterMobile />
    <p class="h-24 flex items-center uppercase md:border-0 border-t border-black px-[clamp(20px,6vw,60px)]">
      <span class="font-[700] inline-block pr-2">olej.to </span>
      <span class="italic"> pisze o trudach prostego życia</span>
    </p>
    <NewsletterDesktop />

</footer>
