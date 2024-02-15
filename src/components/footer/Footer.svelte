<script>
  import NewsletterMobile from './NewsletterMobile.svelte';
  import NewsletterDesktop from './NewsletterDesktop.svelte';
</script>

<footer class="mt-auto w-full border-[2px] border-t-black">
  <div class=" items-center justify-between lg:flex">
    <div class='640:hidden'>
      <NewsletterMobile />
    </div>
    <div class='px-[clamp(20px,6vw,60px)] lg:pr-0 '>
      <NewsletterDesktop />
    </div>
    <p
      class="flex h-24 items-center border-t-[2px] border-black px-[clamp(20px,6vw,60px)]  text-[0.8125rem] uppercase lg:border-0 lg:pl-0"
    >
      <span class=" inline-block pr-2 italic">olej.to </span>
      <span class="italic"> pisze o trudach prostego życia</span>
    </p>
  </div>
</footer>
