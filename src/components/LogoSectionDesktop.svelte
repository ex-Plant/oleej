<script lang="ts">
  import CategoriesNav from './CategoriesNav.svelte';
  import LogoHomeDesktop from '../assets/LogoHomeDesktop.svelte';
  import MenuLinkItem from './navigation/MenuLinkItem.svelte';
</script>

<div class=" px-primary hidden pt-12 md:block mx-auto max-w-[1440px] ">
  <div class="flex justify-between">
    <div class="flex flex-col gap-y-2">
      <MenuLinkItem name="BLOG" link="/" homeDesktopFullMenu />
      <MenuLinkItem name="O MNIE" link="/o-mnie" homeDesktopFullMenu />
      <MenuLinkItem name="KONTAKT" link="/kontakt" homeDesktopFullMenu />
    </div>
    <div class="pl-24">
      <a class="flex" href="/">
        <LogoHomeDesktop />
      </a>
      <div class="pt-5 text-[2rem] font-bold italic ">
        <p class='leading-[100%]'>PISZE O TRUDACH</p>
        <p class='leading-[100%]'>PROSTEGO ŻYCIA</p>
      </div>
    </div>
  </div>
  <div class="pt-14">
    <CategoriesNav />
  </div>
</div>
