<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { ImageType, PostType } from '../types.js';
  import { convertDateToNumericString } from '../helpers/convertDateToNumericString.js';
  import BigArrowUp from '../assets/BigArrowUp.svelte';

  export let post: PostType;
  export let postImage: ImageType | undefined;
</script>

<a class="" href="{`/blog/${post?.slug}`}">

  <!--MOBILE-->
  <article class=" grid border-t border-black pt-7 first:border-0 md:hidden">
    <div class="grid">
      <h4 class="  text-[0.75rem] uppercase">{post.acf.category}</h4>
      <h2 class=" pt-4 text-[1.125rem] font-[700] uppercase">
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
        <p class="line-clamp-4 pt-5">{post.acf.post_description}</p>
      </div>
    {/if}
  </article>

  <!--MD-->
  <article class="hidden pt-7 md:grid 1280:hidden">
    <div class=" md:grid md:grid-cols-2 md:gap-x-12">
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
      <div class=" uppercase ">
        <h2 class=" text-desktop24 font-[700] md:line-clamp-4">
          {post.acf.title}
        </h2>
        <h4 class=" bg-green-700 pt-4 text-desktop24">{post.acf.category}</h4>
        <p class="pt-7 md:line-clamp-6">{post.acf.post_description}</p>
      </div>
    </div>
  </article>
  <!--1280-->
  <article class=" hidden gap-x-24 py-12 pt-12 1280:flex">
    <div class=" flex w-[550px] shrink-0 flex-col uppercase">
      <h2 class="  text-[3rem] font-[700] leading-tight">
        <span class="line-clamp-5"> {post.acf.title} <BigArrowUp /></span>
      </h2>
      <h4 class=" pt-1 text-desktop24">{post.acf.category}</h4>
      <p class=" mt-auto pt-24 text-desktop24">
        {convertDateToNumericString(post.date)}
      </p>
    </div>

    <div class="  md:grid md:grid-cols-2 1280:gap-x-16">
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
        <p class="line-clamp-[8] text-desktop20">
          {post.acf.post_description}
        </p>
      </div>
    </div>
  </article>
</a>
