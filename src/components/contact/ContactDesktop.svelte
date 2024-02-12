<script lang="ts">
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
</script>

<div
  class="hidden max-w-[1440px] px-[clamp(20px,6vw,60px)] lg:block xl:mx-auto"
>
  <div class=" pt-16 pb-[112px] font-bold">
    <p class='text-[2.25rem] leading-[2.5rem] '>Potrzebujesz tekstu?</p>
    <p class='text-[2.25rem] leading-[2.5rem] '>Korekty ? Pomysłu?</p>
  </div>
  <a
    class="{'pr-4'}"
    href="mailto:piotrolej@gmail.com"
  >
    <div class="">
      <p class='text-[10rem]   xl:text-[12.25rem] leading-[73%]'>NAPISZ</p>
        <span class='text-[10rem] xl:text-[12.25rem] leading-[73%]'>
          DO MNIE
        </span>
      <span class=" ml-10 inline-block aspect-square w-[clamp(53px,7vw,106px)]">
        <BigArrowDown />
      </span>

    </div>
  </a>
  <a href="mailto:piotrolej@gmail.com">
    <div class=" flex flex-col space-y-4">
      <p class="  mt-20 text-[clamp(32px,3vw,44px)] font-bold">
        piotrolej@gmail.com
      </p>
      <div class="flex space-x-10 text-[2.25rem] ">
        <p class=" font-bold">IG</p>
        <p class=" ">Olejto</p>
      </div>
    </div>
  </a>
</div>
