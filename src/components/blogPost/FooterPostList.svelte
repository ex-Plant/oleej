<script lang="ts">
import {spacesToDashes} from "../../helpers/spacesToDashes";

export let posts;
export let fotos;

</script>

<section
  class='mx-auto grid max-w-[1440px]  grid-cols-3 gap-x-8 xl:gap-x-16 border-t border-black pt-6 xl:pt-12 px-primary '>
    {#each posts as post (post.acf.slug)}
      {#each fotos as foto (foto.id)}
        {#if post.acf.foto_id === foto.id}
          <a class="" href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
          <article class=" grid pb-12">
            <div class=''>
              <h2 class=" text-desktop30 font-[700] line-clamp-2">{post.acf.title}</h2>
              <h4 class=" text-desktop20 uppercase pb-3">{post.acf.category}</h4>
            </div>
            <div class=" ">
              <div class=''>
                  <img src="{foto.source_url}" alt=""
                       class="aspect-square  object-cover h-[clamp(200px,25vw,400px)]  w-full" />
              </div>

              <p class="mt-6 line-clamp-4 text-desktop20 ">{post.acf.post_description}</p>
            </div>
          </article>
          </a>
        {/if}
      {/each}
    {/each}

</section>
