<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { ImageType, PostType } from '../types.js';
  import { convertDateToNumericString } from '../helpers/convertDateToNumericString.js';
  import BigArrowUp from '../assets/BigArrowUp.svelte';
  import { fade } from 'svelte/transition';
  export let post: PostType;
  export let postImage: ImageType | undefined;
</script>

<a
  in:fade="{{ duration: 200 }}"
  class="group border-b-[2px] border-black last:border-0"
  href="{`/blog/${post?.slug}`}"
>
  <!--MOBILE-->
  <article class=" grid py-7 md:hidden">
    <div class="grid">
      <p class="  text-[0.75rem] uppercase">{post.acf.category}</p>
      <h2
        class=" line-clamp-5 pt-4 text-[1.125rem] font-[700] uppercase leading-[108%]"
      >
        {post.acf.title}
      </h2>
    </div>
    {#if postImage}
      <div class="w-full pt-7">
        <CldImage
          sizes="(max-width: 768px) 100vw"
          width="768"
          class="object-top"
          aspectRatio="{316 / 260}"
          height="auto"
          src="{postImage.source_url}"
          alt="{postImage?.alt_text}"
        />
        <p class="line-clamp-4 pt-5 leading-[137%]">{post.acf.excerpt}</p>
      </div>
    {/if}
  </article>

  <!--MD-->
  <article class="hidden py-12 md:grid 1280:hidden">
    <div class=" grid grid-cols-2 gap-x-12">
      {#if postImage}
        <CldImage
          sizes="(max-width: 560px) 50vw"
          width="{560}"
          class="object-top"
          aspectRatio="{318 / 280}"
          height="auto"
          src="{postImage.source_url}"
          alt="{postImage.alt_text}"
        />
      {/if}
      <div class=" uppercase">
        <h2
          class=" line-clamp-4 h-[140px] text-[2rem] font-[700] leading-[108%]"
        >
          {post.acf.title}
          <span class="inline-block duration-500 group-hover:scale-125">
            <BigArrowUp />
          </span>
        </h2>
        <p class=" pb-2 pt-4 text-[1rem]">{post.acf.category}</p>
        <p class=" line-clamp-4 h-[108px] text-[1.25rem] leading-[140%]">
          {post.acf.excerpt}
        </p>
      </div>
    </div>
  </article>

  <!--1280-->
  <article class=" hidden grid-cols-2 gap-x-16 py-12 1280:grid">
    <div class=" flex w-[550px] shrink-0 flex-col uppercase">
      <div class="h-[260px]">
        <h2 class="line-clamp-4 text-[3rem] font-[700] leading-[108%]">
          {post.acf.title}

          <span class="inline-block duration-500 group-hover:scale-150">
            <BigArrowUp />
          </span>
        </h2>
        <p class=" pt-2 text-[1.5rem]">{post.acf.category}</p>
      </div>

      <p class=" mt-auto pt-4 text-[1.125rem]">
        {convertDateToNumericString(post.date)}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-x-16">
      {#if postImage}
        <CldImage
          sizes="(max-width: 320px) 20vw"
          width="{269}"
          class="object-top"
          aspectRatio="{269 / 323}"
          height="auto"
          src="{postImage.source_url}"
          alt="{postImage.alt_text}"
        />
      {/if}

      <div>
        <p class="line-clamp-[10] w-full text-[1.25rem] leading-[140%]">
          {post.acf.excerpt}
        </p>
      </div>
    </div>
  </article>
</a>
