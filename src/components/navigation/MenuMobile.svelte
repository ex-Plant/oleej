<script lang="ts">
import { twMerge } from "tailwind-merge";
import MenuLinkItem from "./MenuLinkItem.svelte";
import { allPostsStore, activePostCat } from "../../store/global.js";


export let opened = false;
function onCloseMenu() {
  opened = false;
}

</script>

<div
  class="{twMerge(
    'fixed left-0 right-0 z-10 ',
    opened ? 'pointer-events-auto ' : 'pointer-events-none',
  )}"
>
  <div
    class="{twMerge(
      'pl-primary h-[100svh] bg-primaryBlack text-white duration-300 ',
      opened ? ' translate-x-0 ' : ' translate-x-full ',
    )}"
  >
    <div class="flex items-center justify-between h-14">
      <MenuLinkItem name="BLOG" link="/" className="pt-4 pb-1" />
      <button class="px-primary pt-4 pb-1" on:click="{onCloseMenu}">
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
    <div class=" pb-6">
      {#each $allPostsStore.postCategories as category}
        <a class='h-9' href="/">
          <button
            class="group relative w-full text-left"
            on:click="{() => activePostCat.set(category)}"
          >
            <span class="whitespace-nowrap"> {category}</span>
            <span
              class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full'}"
            ></span>
          </button>
        </a>
      {/each}
    </div>
    <MenuLinkItem name="O MNIE" link="/o-mnie" />
    <MenuLinkItem name="KONTAKT" link="/kontakt" />
  </div>
</div>
