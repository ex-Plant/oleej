<script lang="ts">
  import Logo from '../../assets/Logo.svelte';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';
  import MenuMobile from './MenuMobile.svelte';

  export let top = false;

  export let opened = false;

  $: homePage = $page.route.id === '/';

  function onOpenMenu() {
    opened = true;
  }
</script>

<div class="{twMerge(' px-primary fixed left-0 right-0 top-0 z-10 ',
)}">
  <nav
    class="{twMerge(
      ' flex w-full items-center justify-between border-black duration-200',
      !homePage ? 'border-b bg-primary h-20' :
      homePage && top ? 'border-b bg-primary opacity-100 h-20' : '  opacity-0 h-0',
    )}"
  >
    <a
      class="{twMerge(
        'duration-200',
        !homePage && 'opacity-100',
        homePage && top ? 'opacity-100' : 'opacity-0',
      )}"
      href="/"
    >
      <Logo />
    </a>
    <button
      class="h-full whitespace-nowrap text-[1.25rem]"
      on:click="{onOpenMenu}"
    >
      [ MENU ]</button
    >
  </nav>
</div>

<MenuMobile opened="{opened}" />
