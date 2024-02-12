<script lang="ts">
  import AllCategoriesButton from '../assets/AllCategoriesButton.svelte';
  import { twMerge } from 'tailwind-merge';
  import { activePostCat } from '../store/global';
  import { page } from '$app/stores';

  const postCategories = $page.data.allPosts?.postCategories;

</script>

<div class="{twMerge(' max-w-[1440px] mx-auto bg-[#F7F4F0]')}">
  <div
    class=" no-scrollbar flex items-center space-x-6 overflow-hidden overflow-x-scroll border-b-[2px] border-black pb-4 md:pb-5 md:space-x-12"
  >
    <div class="group relative flex items-center justify-center">
      <button
        class="relative inline-block aspect-square h-[clamp(8px,2vw,18px)]"
        aria-label="reset categories"
        on:click="{() => activePostCat.set('')}"
      >
        <AllCategoriesButton />
        <span
          class="{twMerge('absolute bottom-[-4px] left-[50%] h-[1px] w-0 rounded bg-black duration-200 group-hover:left-0 group-hover:w-full',
          $activePostCat === '' && 'w-full left-0'

          )}"
        ></span>
      </button>
    </div>

    {#each postCategories as category}
      <button
        class="group relative text-[0.75rem] font-[400] uppercase md:text-[1.25rem]"
        on:click="{() => activePostCat.set(category)}"
      >
        <span class="whitespace-nowrap"> {category}</span>
        <span
          class="{twMerge('absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full',
          $activePostCat === category && 'w-full left-0'
          )}"
        ></span>
      </button>
    {/each}
  </div>
</div>
