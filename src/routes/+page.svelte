<script lang="ts">
  /** @type {import("./$types").PageData} */
  import { spacesToDashes } from '../helpers/spacesToDashes';
  import { convertDateToNumericString } from '../helpers/convertDateToNumericString';
  import BigArrowUp from '../assets/BigArrowUp.svelte';
  import AllCategoriesButton from '../assets/AllCategoriesButton.svelte';

  export let data;
  $: posts = data.posts;
  let fotos = data.fotos;

  function filterByCategory(category) {
    if (category === '') {
      posts = data.posts;
    } else {
      posts = data.posts.filter((post) => post.acf.category === category);
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

<section title="lista artykulow" class="grid pb-12">
  {#each posts as post}
    {#each fotos as foto}
      {#if post.acf.foto_id === foto.id}
        <!--MOBILE-->
        <article
          class=" mt-[-1px] grid gap-y-6 border-t border-black py-6 md:hidden"
        >
          <div class="grid gap-y-6">
            <h4 class="  text-14 uppercase">{post.acf.category}</h4>
            <h2 class=" text-18 font-[700]">{post.acf.title}</h2>
          </div>
          <div class="">
            <a class="" href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
              <img src="{foto.source_url}" alt="" class=" object-cover" />
            </a>
            <p class="mt-6 line-clamp-4">{post.acf.post_description}</p>
          </div>
        </article>
        <!--MD-->
        <article
          class=" mt-[-1px] hidden border-t border-black py-8 md:grid 1280:hidden"
        >
          <div class=" md:grid md:grid-cols-2 md:gap-x-12">
            <a class="" href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
              <img
                src="{foto.source_url}"
                alt=""
                class=" h-[320px] w-full object-cover"
              />
            </a>
            <div class="  pb-8 uppercase">
              <h2 class=" text-24 font-[700] md:line-clamp-4">
                {post.acf.title}
              </h2>
              <h4 class=" pt-1 text-14">{post.acf.category}</h4>
              <p class="mt-6 md:line-clamp-6">{post.acf.post_description}</p>
            </div>
          </div>
        </article>
        <!--1280-->
        <a class="" href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
          <article
            class=" mt-[-1px] hidden gap-x-24 border-t border-black py-12 1280:flex"
          >
            <div
              class="  flex w-[calc(550/1440*100vw)] shrink-0 flex-col uppercase"
            >
              <h2 class="  text-[3rem] font-[700] leading-normal">
                <span class="line-clamp-5">
                  {post.acf.title} <BigArrowUp /></span
                >
              </h2>
              <h4 class=" pt-1 text-24">{post.acf.category}</h4>
              <p class=" mt-auto pt-24 text-24">
                {convertDateToNumericString(post.date)}
              </p>
            </div>

            <div class=" md:grid md:grid-cols-2 1280:gap-x-16">
              <img
                src="{foto.source_url}"
                alt=""
                class="  aspect-[269/323] object-cover"
              />
              <div>
                <p class="line-clamp-[8] text-20">
                  {post.acf.post_description}
                </p>
              </div>
            </div>
          </article>
        </a>
      {/if}
    {/each}
  {/each}
</section>
