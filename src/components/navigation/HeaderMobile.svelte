<script lang="ts">
  import Logo from '../../assets/Logo.svelte';
  import { twMerge } from 'tailwind-merge';
  import MenuMobile from './MenuMobile.svelte';
  import { mobileMenuOpened } from '../../store/global';
  export let top = false;
</script>

<div class="{twMerge(' px-primary fixed left-0 right-0 top-0 z-10 ')}">
  <nav
    class="{twMerge(
      ' flex w-full items-center justify-between border-b-[2px] border-black bg-primary duration-300 ',
      top ? 'h-20 translate-y-0' : !top && ' h-0 -translate-y-10',
    )}"
  >
    <a
      aria-label="home"
      class="{twMerge('duration-200', top ? 'opacity-100' : 'opacity-0')}"
      href="/"
    >
      <Logo />
    </a>
    <button
      aria-label="menu"
      class="flex h-full items-center justify-center whitespace-nowrap text-[1.25rem]"
      on:click="{() => mobileMenuOpened.set(true)}"
    >
      <span class="">[</span>
      <span class="mt-[3px]">MENU</span>
      <span class="">]</span>
    </button>
  </nav>
</div>

<MenuMobile />
