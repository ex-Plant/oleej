<script>
  import { twMerge } from 'tailwind-merge';
  import Logo from '../../assets/Logo.svelte';
  import MenuLinkItem from './MenuLinkItem.svelte';
  import { page } from "$app/stores";
  $: homePage = $page.route.id === '/';

  export let top = false;


</script>

<div class="{twMerge(' fixed left-0 top-0 z-10 w-full')}">
  <nav
    class="{twMerge(
      ' px-primary flex h-20 w-full items-center justify-between  border-black duration-200',
         !homePage ? 'border-b bg-primary h-20' :
      homePage && top ? 'border-b bg-primary opacity-100 h-20' : '  opacity-0 h-0'
    )}"
  >
    <a class="flex" href="/">
      <Logo />
    </a>
    <div class=" flex [&_button]:uppercase">
      <MenuLinkItem name="BLOG" link="/" />
      <MenuLinkItem name="O MNIE" link="/o-mnie" />
      <MenuLinkItem name="KONTAKT" link="/kontakt" />
    </div>
  </nav>
</div>
