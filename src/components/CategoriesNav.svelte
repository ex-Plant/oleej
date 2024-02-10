<script lang="ts">
  import AllCategoriesButton from '../assets/AllCategoriesButton.svelte';
  import { twMerge } from 'tailwind-merge';
  import { activePostCat } from '../store/global';
  import { page } from '$app/stores';

  const postCategories = $page.data.allPosts?.postCategories;
</script>

<div
  class="{twMerge(
    ' no-scrollbar overflow-x-hidden bg-[#F7F4F0;] duration-100',
  )}"
>
  <div
    class=" flex items-center space-x-6 overflow-hidden overflow-x-scroll border-b border-black pb-4 md:pb-5 lg:space-x-12"
  >
    <button
      class="group relative"
      aria-label="reset categories"
      on:click="{() => activePostCat.set('')}"
    >
      <AllCategoriesButton />
      <span
        class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-200' +
          ' group-hover:left-0 group-hover:w-full'}"></span>
    </button>
    {#each postCategories as category}
      <button
        class="group relative text-[0.75rem] font-[400] uppercase md:text-[1.25rem]"
        on:click="{() => activePostCat.set(category)}"
      >
        <span class="whitespace-nowrap"> {category}</span>
        <span
          class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full'}"
        ></span>
      </button>
    {/each}
  </div>
</div>
