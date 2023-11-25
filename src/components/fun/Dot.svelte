<script>
  import { twMerge } from 'tailwind-merge';

  export let delay = 500;
  export let duration = 1000;
</script>

<div class="relative  h-3 w-3 ">
  <div
    style="{`animation-delay: ${delay}ms;
  animation-duration: ${duration}ms;`}"
    class="{twMerge(
      'absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(13,13,13,1)] opacity-75',
    )}"
  ></div>
  <div
    class="bg-rgba(38,38,38,1) relative inline-flex h-3 w-3 rounded-full"
  ></div>
</div>
