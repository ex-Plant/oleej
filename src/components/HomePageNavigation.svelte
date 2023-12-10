<script lang="ts">
  import AllCategoriesButton from '../assets/AllCategoriesButton.svelte';
  import { twMerge } from 'tailwind-merge';
  import { currentCategory } from '../store/HomeStore';
  export let categories: string[];
  export let top: boolean;

  function filterByCategory(category: string) {
    currentCategory.set(category);
  }
</script>

<div
  title="categories navigation"
  class="{twMerge(
    'px-primary no-scrollbar fixed left-0 right-0 top-20  overflow-hidden duration-100 ',
    top ? 'h-[1px] ' : 'h-12 ',
  )}"
>
  <div
    class="flex h-full items-center space-x-6 overflow-hidden overflow-x-scroll border-b border-black lg:space-x-12 [&_button]:h-10 [&_button]:uppercase"
  >
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
    {#each categories as category}
      <button
        class="group relative"
        on:click="{() => filterByCategory(category)}"
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
