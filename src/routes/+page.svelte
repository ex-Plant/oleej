<script lang="ts">
  import HomePageNavigation from '../components/HomePageNavigation.svelte';
  import Home from '../components/Home.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { getClientWidth, md } from '../store/clientWidthStore';
  import { browser } from '$app/environment';
  import HeaderMobile from '../components/navigation/HeaderMobile.svelte';
  import HeaderDesktop from '../components/navigation/HeaderDesktop.svelte';
  import { twMerge } from 'tailwind-merge';
  import LogoHomeMobile from '../assets/fotos/LogoHomeMobile.svelte';
  import Logo from '../assets/Logo.svelte';
  import LogoHomeDesktop from '../assets/LogoHomeDesktop.svelte';
  import MenuLinkItem from "../components/navigation/MenuLinkItem.svelte";

  let mainRef: HTMLElement;
  let top = false;

  function checkElementPosition() {
    const rect = mainRef.getBoundingClientRect();
    top = rect.top < 80;
  }

  $: getClientWidth();

  $: console.log({ top });
  onMount(() => {
    window.addEventListener('scroll', checkElementPosition);
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('scroll', checkElementPosition);
    }
  });

  let opened = false;

  function onOpenMenu() {
    opened = true;
  }
</script>

<div class="{twMerge('md:hidden')}">
  <HeaderMobile top="{top}" opened="{opened}" />
</div>

<div class=" px-primary md:hidden">
  <button on:click="{onOpenMenu}" class="h-20 whitespace-nowrap text-[1.25rem]">
    [ MENU ]</button
  >
  <a href="/">
    <LogoHomeMobile />
  </a>
  <div class="pt-4 font-bold leading-[100%]">
    <p>PISZE O TRUDACH</p>
    <p>PROSTEGO ŻYCIA</p>
    <div class="pt-8">
      <HomePageNavigation />
    </div>
  </div>
</div>

<!-- DESKTOP -->
<div class=" px-primary hidden md:block pt-20">
  <div class='flex justify-between'>
<div class='flex flex-col gap-y-2'>
  <MenuLinkItem name="BLOG" link="/" homeDesktopFullMenu/>
  <MenuLinkItem name="O MNIE" link="/o-mnie" homeDesktopFullMenu/>
  <MenuLinkItem name="KONTAKT" link="/kontakt" homeDesktopFullMenu/>
</div>
    <div class="">
      <a href="/">
        <LogoHomeDesktop />
      </a>
      <div class="pt-5 font-bold leading-[100%] text-[2rem]">
        <p>PISZE O TRUDACH</p>
        <p>PROSTEGO ŻYCIA</p>
      </div>
    </div>
  </div>

  <div class="pt-14">
    <HomePageNavigation />
  </div>
</div>

<div class="{'hidden md:block'}">
  <HeaderDesktop top="{top}" />
</div>
<main class="" bind:this="{mainRef}">
  <Home />
</main>
