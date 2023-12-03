<script lang="ts">
  import Logo from '../../assets/Logo.svelte';
  import { page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';
  // import Dropdown from './Dropdown.svelte';
  // import { twMerge } from 'tailwind-merge';
  // import { onMount } from 'svelte';
  // let contentRef: HTMLElement;
  // let height = 0;
  // let isOpen = false;
  // onMount(() => (height = contentRef.offsetHeight));
  $: height = $page.route.id === '/' ? 'h-[120px]' : 'h-[80px]';
</script>

<div
  class="{twMerge(
    ' px-primary fixed left-0 top-0 mx-auto flex  w-full bg-primary',
    height,
  )}"
>
  <nav
    class="no-scrollbar flex h-20 w-full items-center justify-between overflow-x-scroll border-b border-black"
  >
    <a class="flex h-20 w-[130px] pr-4" href="/">
        <Logo />
    </a>
    <div
      class="xl:space-x-z flex gap-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 [&_button]:uppercase"
    >
      <a class="group relative text-mobile14 md:text-desktop24" href="/">Blog</a>
      <span
        class="{'absolute bottom-[-3px] left-[50%] h-[1px] w-0 rounded bg-black duration-300' +
          ' group-hover:left-0 group-hover:w-full'}"
      >
      </span>
    </div>
  </nav>
  <!--    <button-->
  <!--      class="w-full text-left text-24 uppercase"-->
  <!--      on:click="{() => alert('coming soon')}"-->
  <!--    >-->
  <!--      [ menu ]-->
  <!--    </button>-->
</div>
