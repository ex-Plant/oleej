<script>
  import { twMerge } from 'tailwind-merge';
  import Logo from '../../assets/Logo.svelte';
  import MenuLinkItem from './MenuLinkItem.svelte';

  export let top = false;
</script>

<div class="{twMerge(' fixed left-0 top-0 z-10 w-full')}">
  <nav
    class="{twMerge(
      ' px-primary flex w-full items-center justify-between  border-b-[2px] border-black bg-primary duration-300',
      top ? 'h-20  translate-y-0' : !top && 'h-0 -translate-y-20',
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
