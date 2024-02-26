<script lang="ts">
  import CategoriesNav from './CategoriesNav.svelte';
  import LogoHomeMobile from '../assets/fotos/LogoHomeMobile.svelte';
  import { mobileMenuOpened } from '../store/global';

  function onOpenMenu() {
    console.log('open menu');
    mobileMenuOpened.set(true);
  }
</script>

<div class=" px-primary md:hidden">
  <div class=" border-b-[2px] border-black pb-12">
    <button
      aria-label="menu"
      on:click="{onOpenMenu}"
      class="flex h-20 items-center justify-center whitespace-nowrap text-[1.25rem]"
    >
      <span class="">[</span>
      <span class="mt-[3px]">MENU</span>
      <span class="">]</span>
    </button>
    <a aria-label="home" href="/">
      <LogoHomeMobile />
    </a>
    <div class="pt-4 font-bold italic leading-[100%]">
      <p class="leading-[100%]">PISZE O TRUDACH</p>
      <p class="leading-[100%]">PROSTEGO ŻYCIA</p>
      <!--    <div class="pt-8">-->
      <!--      <CategoriesNav />-->
      <!--    </div>-->
    </div>
  </div>
</div>
