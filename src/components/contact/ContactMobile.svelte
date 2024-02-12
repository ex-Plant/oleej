<script>
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
</script>

<div class="grid max-w-[1440px] px-[clamp(20px,6vw,60px)] lg:hidden">
  <div class="py-12 text-[1.125rem] font-bold">
    <p class="leading-[110%]">Potrzebujesz tekstu?</p>
    <p class="leading-[110%]">Korekty? Pomysłu?</p>
  </div>

  <a class="{' text-[3.625rem] font-bold  group'}" href="mailto:piotrolej@gmail.com">
    <div class="pb-12">
      <p class="leading-[84%]">NAPISZ</p>
      <div class="leading-[84%] flex items-center space-x-4">
        <span class="leading-[84%]"> DO MNIE </span>
        <span class=" inline-block aspect-square h-[25px] mt-4">
          <BigArrowDown />
        </span>
      </div>
    </div>

    <p class="h-10 pt-4 text-[1.125rem] font-bold group-hover:underline">piotrolej@gmail.com</p>
  </a>
  <div class="flex items-center space-x-6">
    <p class="text-[1.125rem] leading-[110%] font-bold">IG</p>
    <div class="grid">
      <p class="text-[1.125rem] leading-[110%]">olejto</p>
    </div>
  </div>
</div>
