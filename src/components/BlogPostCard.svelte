<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { ImageType, PostType } from '../types.js';
  import { convertDateToNumericString } from '../helpers/convertDateToNumericString.js';
  import BigArrowUp from '../assets/BigArrowUp.svelte';

  export let post: PostType;
  export let postImage: ImageType | undefined;
</script>

<a
  class="group border-b-[2px] border-black last:border-0"
  href="{`/blog/${post?.slug}`}"
>
  <!--MOBILE-->
  <article class=" grid py-7 lg:hidden">
    <div class="grid">
      <p class="  text-[0.75rem] uppercase">{post.acf.category}</p>
      <h2 class=" pt-4 text-[1.125rem] font-[700] uppercase leading-[108%]">
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
  <article class="hidden py-12 lg:grid 1280:hidden">
    <div class=" grid grid-cols-2 gap-x-12">
      {#if postImage}
        <CldImage
          sizes="(max-width: 560px) 50vw"
          width="{560}"
          class="object-top"
          aspectRatio="{316 / 260}"
          height="auto"
          src="{postImage.source_url}"
          alt="{postImage.alt_text}"
        />
      {/if}
      <div class=" uppercase">
        <h2 class=" line-clamp-5 text-[2.5rem] font-[700] leading-[108%]">
          {post.acf.title}
          <span class="inline-block duration-500 group-hover:scale-125">
            <BigArrowUp />
          </span>
        </h2>
        <p class=" pb-2 pt-4 text-[1.5rem]">{post.acf.category}</p>
        <p class=" line-clamp-3 text-[1.25rem] leading-[140%]">
          {post.acf.excerpt}
        </p>
      </div>
    </div>
  </article>

  <!--1280-->
  <article class=" hidden grid-cols-2 gap-x-24 py-12 1280:grid">
    <div class=" flex w-[550px] shrink-0 flex-col uppercase">
        <h2 class="line-clamp-5  text-[3.75rem] font-[700] leading-[108%]">
          {post.acf.title}
          <span class="inline-block duration-500 group-hover:scale-150">
            <BigArrowUp />
          </span>
        </h2>
      <p class=" pt-4 text-[1.5rem]">{post.acf.category}</p>
      <p class=" mt-auto pt-4 text-[1.125rem]">
        {convertDateToNumericString(post.date)}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-x-16">
      {#if postImage}
        <CldImage
          sizes="(max-width: 269px) 20vw"
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
