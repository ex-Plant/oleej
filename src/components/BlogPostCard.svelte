<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { ImageType, PostType } from '../types.js';
  import { convertDateToNumericString } from '../helpers/convertDateToNumericString.js';
  import BigArrowUp from '../assets/BigArrowUp.svelte';

  export let post: PostType;
  export let postImage: ImageType | undefined;

</script>

<a class="border-black border-b last:border-0" href={`/blog/${post?.slug}`}>

  <!--MOBILE-->
  <article class=" grid py-7 md:hidden">
    <div class="grid">
      <h4 class="  text-[0.75rem] uppercase">{post.acf.category}</h4>
      <h2 class=" pt-4 text-[1.125rem] leading-[108%] font-[700] uppercase">
        {post.acf.title}
      </h2>
    </div>
    {#if postImage}
      <div class="w-full pt-7">
        <CldImage
          loading="lazy"
          sizes="(max-width: 768px) 100vw"
          width="768"
          class="object-top"
          aspectRatio="{316 / 260}"
          height="auto"
          src="{postImage.source_url}"
          alt="{postImage?.alt_text}"
        />
        <p class="line-clamp-4 pt-5 leading-[137%]">{post.acf.post_description}</p>
      </div>
    {/if}
  </article>

  <!--MD-->
  <article class="hidden py-12 md:grid 1280:hidden">
    <div class=" md:grid md:grid-cols-2 md:gap-x-12">
      {#if postImage}
        <CldImage
          loading="lazy"
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
        <h2 class=" text-[2.5rem] leading-[108%] font-[700] md:line-clamp-4">
          {post.acf.title}
        </h2>
        <h4 class=" text-[1.5rem] pb-2 pt-4">{post.acf.category}</h4>
        <p class=" text-[1.25rem] md:line-clamp-4 leading-[140%]">{post.acf.post_description}</p>
      </div>
    </div>
  </article>

  <!--1280-->
  <article class=" hidden gap-x-24 py-12 1280:grid grid-cols-2 ">
    <div class=" flex w-[550px] shrink-0 flex-col uppercase">
      <h2 class=" ">
        <span class="line-clamp-4  text-[3.75rem] font-[700] leading-[108%]"> {post.acf.title} <BigArrowUp /></span>
      </h2>
      <h4 class=" pt-4 text-[1.5rem]">{post.acf.category}</h4>
      <p class=" mt-auto pt-4 text-[1.125rem] ">
        {convertDateToNumericString(post.date)}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-x-16 ">
      {#if postImage}
        <CldImage
          loading="lazy"
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
        <p class="line-clamp-[10] text-[1.25rem] leading-[140%] w-full">
          {post.acf.post_description}
        </p>
      </div>
    </div>
  </article>
</a>
