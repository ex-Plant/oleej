<script lang="ts">
  import type { LoadingType, PostType } from '../types.js';
  import { convertDateToNumericString } from '../helpers/convertDateToNumericString.js';
  import BigArrowUp from '../assets/BigArrowUp.svelte';
  import { fade } from 'svelte/transition';
  import { CldImage } from 'svelte-cloudinary';

  export let post: PostType;
  export let index: number;
  const title = post.title;
  const category = post.blogPost.category;
  const excerpt = post.blogPost.excerpt;
  const mobileFotoId = post.blogPost.mobileFotoId;

  //first post is eager, the rest are lazy
  let loading: LoadingType = index === 0 ? 'eager' : 'lazy';
</script>

{#if mobileFotoId}
  <a
    in:fade="{{ duration: 500 }}"
    class="group border-b-[2px] border-black last:border-0"
    href="{`/blog/${post?.slug}`}"
  >
    <!--MOBILE-->
    <article class=" grid py-7 md:hidden">
      <div class="grid">
        <p class="  text-[0.75rem] uppercase">{category}</p>
        <h2 class=" line-clamp-5 pt-4 text-[1.125rem] font-[700] uppercase leading-[108%]">
          {title}
        </h2>
      </div>
      <div class="w-full pt-7">
        <CldImage
          sizes="(max-width: 768px) 100vw"
          aspectRatio="{316 / 260}"
          height="auto"
          width="auto"
          alt="{mobileFotoId.node.altText || 'zdjęcie do artykułu'}"
          src="{mobileFotoId.node.mediaItemUrl}"
          quality="100"
        />
        {#if excerpt}
          <p class="line-clamp-4 pt-5 leading-[137%]">{excerpt}</p>
        {/if}
      </div>
    </article>

    <!--MD-->
    <article class="hidden py-12 md:grid 1280:hidden">
      <div class=" grid grid-cols-2 gap-x-12">
        <CldImage
          sizes="(max-width: 560px) 50vw"
          aspectRatio="{318 / 280}"
          height="auto"
          width="auto"
          alt="{mobileFotoId.node.altText || 'zdjęcie do artykułu'}"
          src="{mobileFotoId.node.mediaItemUrl}"
          quality="100"
        />
        <div>
          <h2 class=" line-clamp-4 h-[140px] text-[2rem] font-[700] uppercase leading-[108%]">
            {title}
            <span class="inline-block duration-500 group-hover:scale-125">
              <BigArrowUp />
            </span>
          </h2>
          <p class=" pb-2 pt-4 text-[1rem]">{category}</p>
          {#if excerpt}
            <p class=" line-clamp-4 h-[108px] text-[1.25rem] leading-[140%]">
              {excerpt}
            </p>
          {/if}
        </div>
      </div>
    </article>

    <!--1280-->
    <article class=" hidden grid-cols-2 gap-x-16 py-12 1280:grid">
      <div class=" flex w-[550px] shrink-0 flex-col uppercase">
        <div class="h-[260px]">
          <h2 class="line-clamp-4 text-[3rem] font-[700] leading-[108%]">
            {title}

            <span class="inline-block duration-500 group-hover:scale-150">
              <BigArrowUp />
            </span>
          </h2>
          <p class=" pt-2 text-[1.5rem]">{category}</p>
        </div>

        <p class=" mt-auto pt-4 text-[1.125rem]">
          {convertDateToNumericString(post.date)}
        </p>
      </div>

      <div class="grid grid-cols-2 gap-x-16">
        <CldImage
          sizes="(max-width: 269px) 20vw"
          aspectRatio="{269 / 323}"
          alt="{mobileFotoId.node.altText || 'zdjęcie do artykułu'}"
          src="{mobileFotoId.node.mediaItemUrl}"
          height="auto"
          width="auto"
          quality="100"
        />
        <div>
          {#if excerpt}
            <p class="line-clamp-[10] w-full text-[1.25rem] leading-[140%]">
              {excerpt}
            </p>
          {/if}
        </div>
      </div>
    </article>
  </a>
{/if}
