<script>
  import BigArrowDown from '../../../assets/BigArrowDown.svelte';
</script>

<div
  class="hidden max-w-[1440px] px-[clamp(20px,6vw,60px)] pt-12 md:grid xl:mx-auto"
>
  <a
    class="{'pr-4 text-desktop196 font-bold '}"
    href="mailto:piotrolej@gmail.com"
  >
    <p>NAPISZ</p>
    <span> DO MNIE </span>
    <div class=" inline-block aspect-square w-[clamp(53px,7vw,106px)]">
      <BigArrowDown />
    </div>
    <p class="h-10 text-[clamp(32px,3vw,44px)] font-bold">
      piotrolej@gmail.com
    </p>
  </a>
  <div class="flex space-x-[150px] pt-[144px]">
    <p class=" text-[clamp(24px,2vw,30px)] font-bold">SOCIALE</p>
    <div class="gapy-8 grid">
      <a class=" text-[clamp(24px,2vw,30px)]" href="#">olejtopisze</a>
      <a class=" text-[clamp(24px,2vw,30px)]" href="#">kotlet_devolaj</a>
    </div>
  </div>
</div>
