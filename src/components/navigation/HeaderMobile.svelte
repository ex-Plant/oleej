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
      ' flex w-full items-center justify-between border-black duration-200',
      top && 'h-20 border-b-[2px] bg-primary opacity-100',
      !top && ' h-0 border-none opacity-0',
    )}"
  >
    <a
      class="{twMerge(
        'duration-200',
        top && 'opacity-100',
        !top && 'opacity-0',
      )}"
      href="/"
    >
      <Logo />
    </a>
    <button
      class="h-full whitespace-nowrap text-[1.25rem]"
      on:click="{() => mobileMenuOpened.set(true)}"
    >
      [MENU]</button
    >
  </nav>
</div>

<MenuMobile />
