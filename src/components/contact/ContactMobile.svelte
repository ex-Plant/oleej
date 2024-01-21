<script>
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
</script>

<div
  class="grid max-w-[1440px]  px-[clamp(20px,6vw,60px)] md:hidden"
>
<div class='py-12 text-[1.125rem] font-bold'>
  <p>
    Potrzebujesz tekstu?
  </p>
  <p>
    Korekty ? Pomysłu?
  </p>
</div>

  <a
    class="{'pr-4 text-[3.625rem] font-bold leading-[89%]'}"
    href="mailto:piotrolej@gmail.com"
  >
    <div class='pb-12'>
      <p>NAPISZ</p>
      <span> DO MNIE </span>
      <div class=" inline-block aspect-square h-[25px]">
        <BigArrowDown />
      </div>
    </div>


    <p class="h-10 pt-4 text-mobile18 font-bold">piotrolej@gmail.com</p>
  </a>
  <div class="flex space-x-12 items-center ">
    <p class="text-mobile18 font-bold">IG</p>
    <div class="grid">
      <p class="text-mobile16">olejtopisze</p>
    </div>
  </div>
</div>
