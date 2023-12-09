<script lang="ts">
  import Logo from '../../assets/Logo.svelte';
  import { page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';
  import MenuLinkItem from './MenuLinkItem.svelte';
  // import Dropdown from './Dropdown.svelte';
  // import { twMerge } from 'tailwind-merge';
  // import { onMount } from 'svelte';
  // let contentRef: HTMLElement;
  // let height = 0;
  // let isOpen = false;
  // onMount(() => (height = contentRef.offsetHeight));

  $: homePage = $page.route.id === '/';
</script>

<div
  class="{twMerge(
    ' px-primary fixed left-0 top-0 mx-auto flex  w-full bg-primary h-20',
  )}"
>
  <nav
    class="{twMerge(
      'no-scrollbar flex  w-full items-center justify-between overflow-x-scroll h-20 ',
      !homePage && ' border-b border-black',
    )}"
  >
    <a class="flex h-20 w-[130px] pr-4" href="/">
      <Logo />
    </a>
    <div class=" flex [&_button]:uppercase">
      <MenuLinkItem name="O MNIE" link="/o-mnie" />
      <MenuLinkItem name="KONTAKT" link="/kontakt" />
      <MenuLinkItem name="BLOG" link="/" />
    </div>
  </nav>
  <!--    <button-->
  <!--      class="w-full text-left text-24 uppercase"-->
  <!--      on:click="{() => alert('coming soon')}"-->
  <!--    >-->
  <!--      [ menu ]-->
  <!--    </button>-->
</div>
