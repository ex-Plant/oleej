<script>
  import { twMerge } from 'tailwind-merge';
  import Logo from '../../assets/Logo.svelte';
  import MenuLinkItem from './MenuLinkItem.svelte';

  export let top = false;
</script>

<div class="{twMerge(' fixed left-0 top-0 z-10 w-full')}">
  <nav
    class="{twMerge(
      ' px-primary flex h-20 w-full items-center justify-between  border-black duration-200',
      top && 'h-20 border-b-[2px] bg-primary opacity-100',
      !top && 'h-0 opacity-0',
    )}"
  >
    <a class="flex" href="/">
      <Logo />
    </a>
    <div class=" flex [&_button]:uppercase">
      <MenuLinkItem name="BLOG" link="/" />
      <MenuLinkItem name="O MNIE" link="/o-mnie" />
      <MenuLinkItem name="KONTAKT" link="/kontakt" />
      <!--      <MenuLinkItem name="SZUKAJ" />-->
    </div>
  </nav>
</div>
