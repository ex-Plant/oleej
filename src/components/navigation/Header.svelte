<script lang="ts">
  import Logo from '../../assets/Logo.svelte';
  import { page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';
  import MenuLinkItem from './MenuLinkItem.svelte';
  $: homePage = $page.route.id === '/';
</script>

<div
  class="{twMerge(
    ' fixed left-0 top-0 mx-auto  flex h-20 w-full bg-primary z-10    ',
  )}"
>
  <div class='w-full max-w-[1440px] px-primary mx-auto'>
    <nav
      class="{twMerge(
        'no-scrollbar  flex h-20 w-full items-center justify-between  overflow-x-scroll  ',
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
  </div>
</div>
