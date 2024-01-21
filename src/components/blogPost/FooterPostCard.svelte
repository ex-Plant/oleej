<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { ImageType, PostType } from '../../types';

  export let post: PostType;
  export let postImage: ImageType | undefined;
</script>

{#if postImage}
  <a href="{`/blog/${post?.slug}`}">
    <article class=" grid">
      <div class="grid">
        <h2 class=" line-clamp-2 h-[90px] text-[1.875rem] font-[700] uppercase">
          {post.acf.title}
        </h2>
        <h4 class=" text-[1.25rem] uppercase">{post.acf.category}</h4>
      </div>

      <div class="w-full pt-4">
        <CldImage
          sizes="(max-width: 768px) 100vw"
          width="768"
          class="object-top"
          aspectRatio="{400 / 400}"
          height="auto"
          src="{postImage.source_url}"
          alt="{postImage?.alt_text}"
        />
        <p class="line-clamp-4 h-[144px] pt-8 text-[1.25rem] leading-[140%]">
          {post.acf.post_description}
        </p>
        <p class="pt-4">
          <span class="group relative pb-1 font-bold">
            <span> WIĘCEJ </span>
            <span
              class="{'absolute bottom-0 left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full'}"
            ></span>
          </span>
        </p>
      </div>
    </article>
  </a>
{/if}
