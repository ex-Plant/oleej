<script lang="ts">
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
</script>

<div
  class="hidden max-w-[1440px] px-[clamp(20px,6vw,60px)] lg:block xl:mx-auto"
>
  <div class=" pb-[112px] pt-16 font-bold">
    <p class="text-[2.25rem] leading-[2.5rem]">Potrzebujesz tekstu?</p>
    <p class="text-[2.25rem] leading-[2.5rem]">Korekty? Pomysłu?</p>
  </div>
  <div class="{'pr-4 group'}">
    <a href="/wiadomosc" class="">
      <p class="text-[10rem] leading-[73%] xl:text-[12.25rem]">NAPISZ</p>
      <span class="text-[10rem] leading-[73%] xl:text-[12.25rem]">
        DO MNIE
      </span>
      <span class=" ml-10 inline-block aspect-square w-[clamp(53px,7vw,106px)] group-hover:scale-125 duration-500">
        <BigArrowDown />
      </span>
    </a>
  </div>
  <div>
    <div class=" flex flex-col space-y-4">
      <a
        href="/wiadomosc"
        class="  mt-20 text-[2.25rem] font-bold leading-[2.5rem] hover:underline"
      >
        piotrolej@gmail.com
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/0lejto?igsh=eXhoenEyNWNuOWJ4&utm_source=qr"
        class="flex space-x-10 hover:underline"
      >
        <p class=" text-[2.25rem] font-bold leading-[2.5rem]">IG</p>
        <p class="text-[2.25rem] leading-[2.5rem]">Olejto</p>
      </a>
    </div>
  </div>
</div>
