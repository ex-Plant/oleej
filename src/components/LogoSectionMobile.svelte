<script lang="ts">
  import CategoriesNav from './CategoriesNav.svelte';
  import LogoHomeMobile from '../assets/fotos/LogoHomeMobile.svelte';
  import { mobileMenuOpened } from '../store/global';

  function onOpenMenu() {
    console.log('open menu');
    mobileMenuOpened.set(true);
  }
</script>

<div class=" px-primary  md:hidden">
  <button on:click="{onOpenMenu}" class="h-20 whitespace-nowrap text-[1.25rem]">
    [MENU]
  </button>
  <a href="/">
    <LogoHomeMobile />
  </a>
  <div class="pt-4 font-bold leading-[100%]">
    <p>PISZE O TRUDACH</p>
    <p>PROSTEGO ŻYCIA</p>
    <div class="pt-8">
      <CategoriesNav />
    </div>
  </div>
</div>
