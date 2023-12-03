<script lang="ts">
  import { spacesToDashes } from '../../helpers/spacesToDashes';
  import type { ImageType, PostType } from "../../types";

  export let posts: PostType[];
  export let fotos: ImageType[];
</script>

<section class="px-primary mx-auto max-w-[1440px]">
  <div
    class=" grid grid-cols-3 gap-x-8 border-t border-black pt-6 xl:gap-x-16 xl:pt-12"
  >
    {#each posts as post (post.acf.slug)}
      {#each fotos as foto (foto.id)}
        {#if post.acf.foto_id === foto.id}
          <a class="" href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
            <article class=" grid pb-12">
              <div class="">
                <h2 class=" line-clamp-2 text-desktop30 font-[700]">
                  {post.acf.title}
                </h2>
                <h4 class=" pb-3 text-desktop20 uppercase">
                  {post.acf.category}
                </h4>
              </div>
              <div class=" ">
                <div class="">
                  <img
                    src="{foto.source_url}"
                    alt=""
                    class="aspect-square h-[clamp(200px,25vw,400px)] w-full object-cover"
                  />
                </div>

                <p class="mt-6 line-clamp-4 text-desktop20">
                  {post.acf.post_description}
                </p>
              </div>
            </article>
          </a>
        {/if}
      {/each}
    {/each}
  </div>
</section>
