<script lang="ts">
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
</script>

<div
  class="hidden max-w-[1440px] px-[clamp(20px,6vw,60px)] md:block xl:mx-auto"
>
  <div class="py-[112px] text-[2.25rem] font-bold">
    <p>Potrzebujesz tekstu?</p>
    <p>Korekty ? Pomysłu?</p>
  </div>
  <a
    class="{'pr-4 text-desktop196 leading-[74%] '}"
    href="mailto:piotrolej@gmail.com"
  >
    <div class="">
      <p>NAPISZ</p>
      <span> DO MNIE </span>
      <div class=" inline-block aspect-square w-[clamp(53px,7vw,106px)]">
        <BigArrowDown />
      </div>
    </div>
  </a>
  <a href="mailto:piotrolej@gmail.com">
    <div class=" flex flex-col justify-end">
      <p class="  mt-full text-[clamp(32px,3vw,44px)] font-bold">
        piotrolej@gmail.com
      </p>
      <div class="flex space-x-20 text-[2.25rem] ">
        <p class=" font-bold">IG</p>
        <p class=" ">Olejto</p>
      </div>
    </div>
  </a>
</div>
