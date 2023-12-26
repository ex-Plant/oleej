<script lang="ts">
  import AllCategoriesButton from '../assets/AllCategoriesButton.svelte';
  import { twMerge } from 'tailwind-merge';
  import { activePostCat } from "../store/global";
  import { page } from "$app/stores";

  export let top: boolean;
  $: postCategories = $page.data.postCategories;

</script>

<div
  title="categories navigation"
  class="{twMerge(
    'px-primary no-scrollbar fixed left-0 right-0 top-16 overflow-hidden  bg-[#F7F4F0;] duration-100  md:top-20 ',
    top ? 'h-[1px] ' : 'h-12 ',
  )}"
>
  <div
    class="flex h-full items-center space-x-6 overflow-hidden overflow-x-scroll border-b border-black lg:space-x-12 [&_button]:h-10 [&_button]:uppercase"
  >
    <button
      class="group relative"
      aria-label="reset categories"
      on:click="{() =>  activePostCat.set('')}"
    >
      <AllCategoriesButton />
      <span
        class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-200' +
          ' group-hover:left-0 group-hover:w-full'}"></span>
    </button>
    {#each postCategories as category}
      <button
        class="group relative"
        on:click="{() =>  activePostCat.set(category)}"
      >
        <span class="whitespace-nowrap text-mobile14 md:text-desktop24">
          {category}</span
        >
        <span
          class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full'}"
        ></span>
      </button>
    {/each}
  </div>
</div>
