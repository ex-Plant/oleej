<script>
import AllCategoriesButton from "../assets/AllCategoriesButton.svelte"

export let posts;
function filterByCategory(category) {
  if (category !== '') {
    posts = posts.filter((post) => post.acf.category === category);
  }
}
</script>

<nav
  title="categories navigation"
  class='fixed top-20 left-0 right-0 px-primary flex items-center space-x-6 overflow-x-scroll no-scrollbar [&_button]:h-10 [&_button]:uppercase  '
>
  <button
    class='group relative '
    aria-label="reset categories"
    on:click="{() => filterByCategory('')}"
  >
    <AllCategoriesButton />
    <span
      class={'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-200' +
        ' group-hover:left-0 group-hover:w-full'}
    ></span>
  </button>
  <button
    class='group relative'
    on:click="{() => filterByCategory('na poważnie')}">
    <span class='whitespace-nowrap'>    na poważnie</span>

    <span
      class={'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300' +
        ' group-hover:left-0 group-hover:w-full'}
    ></span>
  </button>
  <button
    class='group relative'
    on:click="{() => filterByCategory('historie')}">
    <span>historie</span>
    <span
      class={'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300' +
        ' group-hover:left-0 group-hover:w-full'}
    ></span>
  </button
  >
  <button
    class='group relative'
    on:click="{() => filterByCategory('polecane')}"><span>
    polecane</span>
    <span
      class={'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300' +
        ' group-hover:left-0 group-hover:w-full'}
    ></span>

  </button
  >
</nav>
