<script lang="ts">
  import AllCategoriesButton from '../assets/AllCategoriesButton.svelte';
  import type {  PostType } from "../types";
  import { twMerge } from "tailwind-merge";
  export let posts: PostType[];
  export let categories: string[];
  export let top: boolean;
  function filterByCategory(category: string) {
    if (category !== '') {
      posts = posts.filter((post) => post.acf.category === category);
    }
  }
</script>

<div
  title="categories navigation"
     class={twMerge("px-primary no-scrollbar fixed left-0 right-0 top-[80px]  duration-100 overflow-hidden   ",
     top ? "h-[1px]" : "h-12 "
     )}
>
  <div
    class='flex items-center space-x-6 lg:space-x-12 overflow-x-scroll [&_button]:h-10 [&_button]:uppercase overflow-hidden border-b border-black h-full'>

  <button
    class="group relative"
    aria-label="reset categories"
    on:click="{() => filterByCategory('')}"
  >
    <AllCategoriesButton />
    <span
      class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-200' +
        ' group-hover:left-0 group-hover:w-full'}"></span>
  </button>
  {#each categories as category }
  <button
    class="group relative"
    on:click="{() => filterByCategory(category)}"
  >
    <span class="whitespace-nowrap text-mobile14 md:text-desktop24"> {category}</span>

    <span
      class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300' +
        ' group-hover:left-0 group-hover:w-full'}"></span>
  </button>
    {/each}
  </div>
</div>
