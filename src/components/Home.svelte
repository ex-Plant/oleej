<script lang="ts">
  import { spacesToDashes } from '../helpers/spacesToDashes.js';
  import { convertDateToNumericString } from '../helpers/convertDateToNumericString.js';
  import BigArrowUp from '../assets/BigArrowUp.svelte';
  import type { ImageType, PostType } from '../types';
  export let posts: PostType[];
  export let fotos: ImageType[];





</script>

<section title="lista artykulow" class="grid mt-16 px-primary">
  {#each posts as post}
    {#each fotos as foto}
      {#if post.acf.foto_id === foto.id}
        <!--MOBILE-->
        <article
          class=" mt-[-1px] grid gap-y-6  py-6 pt-6 md:hidden"
        >
          <div class="grid gap-y-6">
            <h4 class="  text-mobile14 uppercase">{post.acf.category}</h4>
            <h2 class=" text-mobile18 font-[700]">{post.acf.title}</h2>
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
          class=" mt-[-1px] hidden  py-8 pt-8 md:grid 1280:hidden"
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
              <h2 class=" text-desktop24 font-[700] md:line-clamp-4">
                {post.acf.title}
              </h2>
              <h4 class=" pt-1 text-desktop24">{post.acf.category}</h4>
              <p class="mt-6 md:line-clamp-6">{post.acf.post_description}</p>
            </div>
          </div>
        </article>
        <!--1280-->
        <a class="" href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
          <article
            class=" mt-[-1px] hidden gap-x-24  py-12 pt-12 1280:flex"
          >
            <div
              class="  flex w-[calc(550/1440*100vw)] shrink-0 flex-col uppercase"
            >
              <h2 class="  text-[3rem] font-[700] leading-normal">
                <span class="line-clamp-5">
                  {post.acf.title} <BigArrowUp /></span
                >
              </h2>
              <h4 class=" pt-1 text-desktop24">{post.acf.category}</h4>
              <p class=" mt-auto pt-24 text-desktop24">
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
                <p class="line-clamp-[8] text-desktop20">
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
