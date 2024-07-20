<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { activePostCat } from '../store/global';
  import { page } from '$app/stores';

  const postCategories = $page?.data?.postCategories ?? [];
</script>

<div class="{twMerge(' mx-auto max-w-[1440px] bg-[#F7F4F0]')}">
  <div
    class=" no-scrollbar flex items-center space-x-6 overflow-hidden overflow-x-scroll border-b-[2px] border-black pb-4 md:space-x-12 md:pb-5"
  >
    <div class="group relative flex items-center justify-center uppercase">
      <button
        class="group relative text-[0.75rem] font-[400] uppercase md:text-[1.25rem]"
        on:click="{() => activePostCat.set('')}"
      >
        <span class="whitespace-nowrap"> Wszystkie </span>
        <span
          class="{twMerge(
            'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full',
            $activePostCat === '' && 'left-0 w-full',
          )}"></span>
      </button>
    </div>

    {#each postCategories as category}
      <button
        class="group relative text-[0.75rem] font-[400] uppercase md:text-[1.25rem]"
        on:click="{() => activePostCat.set(category)}"
      >
        <span class="whitespace-nowrap"> {category}</span>
        <span
          class="{twMerge(
            'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full',
            $activePostCat === category && 'left-0 w-full',
          )}"></span>
      </button>
    {/each}
  </div>
</div>
