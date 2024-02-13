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
  <button on:click="{onOpenMenu}" class="h-20 whitespace-nowrap text-[1.25rem]">
    [MENU]
  </button>
  <a aria-label='home' href="/">
    <LogoHomeMobile />
  </a>
  <div class="pt-4 font-bold italic leading-[100%]">
    <p class="leading-[100%]">PISZE O TRUDACH</p>
    <p class="leading-[100%]">PROSTEGO ŻYCIA</p>
    <div class="pt-8">
      <CategoriesNav />
    </div>
  </div>
</div>
