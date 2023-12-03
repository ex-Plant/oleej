<script lang="ts">
  import AllCategoriesButton from '../assets/AllCategoriesButton.svelte';
  import type { Category, PostType } from "../types";
  export let posts: PostType[];
  export let categories: Category[];
  $: categoriesFiltered = categories.filter(category => category.name.toLowerCase() !== "bez kategorii")
  function filterByCategory(category: string) {
    if (category !== '') {
      posts = posts.filter((post) => post.acf.category === category);
    }
  }
</script>

<nav
  title="categories navigation"
  class="px-primary no-scrollbar fixed left-0 right-0 top-20 flex items-center space-x-6 overflow-x-scroll [&_button]:h-10 [&_button]:uppercase"
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
  {#each categoriesFiltered as category }
  <button
    class="group relative"
    on:click="{() => filterByCategory(category.name)}"
  >
  >
    <span class="whitespace-nowrap"> {category.name}</span>

    <span
      class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300' +
        ' group-hover:left-0 group-hover:w-full'}"></span>
  </button>
    {/each}
</nav>
