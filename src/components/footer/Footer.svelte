<script>
  import NewsletterMobile from "./NewsletterMobile.svelte";
  import NewsletterDesktop from "./NewsletterDesktop.svelte";
</script>

<footer
  class="mt-auto border-t-black border-[1px]  w-full  ">
  <div class='max-w-[1440px] xl:mx-auto md:flex justify-between items-center '>
    <NewsletterMobile />
    <p
      class="h-24 flex items-center uppercase md:border-0 border-t border-black px-[clamp(20px,6vw,60px)] md:pl-0 lg:pl-[clamp(20px,6vw,60px)] lg:pr-0">
      <span class="font-[700] inline-block pr-2 text-mobile12">olej.to </span>
      <span class="italic text-mobile12"> pisze o trudach prostego życia</span>
    </p>
    <NewsletterDesktop />
  </div>
</footer>
