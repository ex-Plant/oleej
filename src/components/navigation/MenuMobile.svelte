<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import MenuLinkItem from './MenuLinkItem.svelte';
  import {
    allPostsStore,
    activePostCat,
    mobileMenuOpened,
  } from '../../store/global.js';

  function onSelectCategory(category: string) {
    activePostCat.set(category);
    mobileMenuOpened.set(false);
  }
</script>

<div
  class="{twMerge(
    'fixed left-0 right-0 z-10 ',
    $mobileMenuOpened ? 'pointer-events-auto ' : 'pointer-events-none',
  )}"
>
  <div
    class="{twMerge(
      'pl-primary h-[100svh] bg-primaryBlack text-white duration-300 ',
      $mobileMenuOpened ? ' translate-x-0 ' : ' translate-x-full ',
    )}"
  >
    <div class="flex h-14 items-center justify-between">
      <button on:click="{() => mobileMenuOpened.set(false)}">
        <MenuLinkItem name="BLOG" link="/" className="pt-4 pb-1" menuMobile />
      </button>
      <button
        class="px-primary pb-1 pt-4"
        on:click="{() => mobileMenuOpened.set(false)}"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L16 16" stroke="white"></path>
          <path d="M1 1L16 16" stroke="white"></path>
          <path d="M16 1L1 16" stroke="white"></path>
          <path d="M16 1L1 16" stroke="white"></path>
        </svg>
      </button>
    </div>
    <div class=" [&:*]:lowercase flex flex-col pb-6">
      {#each $allPostsStore.postCategories as category}
        <a class="h-9 w-full" href="/">
          <button
            class="group relative pb-1 text-left"
            on:click="{() => onSelectCategory(category)}"
          >
            <span class="whitespace-nowrap"> {category}</span>
            <span
              class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-white duration-300 group-hover:left-0 group-hover:w-full'}"
            ></span>
          </button>
        </a>
      {/each}
    </div>
    <div class="flex flex-col">
      <button on:click="{() => mobileMenuOpened.set(false)}">
        <MenuLinkItem name="O MNIE" link="/o-mnie" menuMobile />
      </button>
      <button on:click="{() => mobileMenuOpened.set(false)}">
        <MenuLinkItem name="KONTAKT" link="/kontakt" menuMobile />
      </button>
    </div>
  </div>
</div>
