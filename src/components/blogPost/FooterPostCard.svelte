<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { PostType } from '../../types';
  export let post: PostType;

</script>

  <a href="{`/blog/${post?.slug}`}">
    <article class=" grid group">
      <div class="grid">
        <h2 class=" line-clamp-3 h-[96px] text-[1.875rem] leading-[110%] font-[700] uppercase">
          {post.title}
        </h2>
        <h4 class=" text-[1.25rem] uppercase mt-2">{post.blogPost.category}</h4>
      </div>

      <div class="w-full pt-4">
        <CldImage
          sizes="(max-width: 768px) 100vw"
          width="auto"
          class="object-top"
          aspectRatio="{400 / 400}"
          height="auto"
          src="{post.blogPost.mobileFotoId.node.mediaItemUrl}"
          alt="{post.blogPost.mobileFotoId?.node.altText}"
          quality='100'
        />
        <p class="line-clamp-4 h-[144px] pt-8 text-[1.25rem] leading-[140%]">
          {post.blogPost.excerpt}
        </p>
        <p class="pt-4">
          <span class=" relative pb-1 font-bold">
            <span class='group-hover:underline'> WIĘCEJ </span>
          </span>
        </p>
      </div>
    </article>
  </a>
