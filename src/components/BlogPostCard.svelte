<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { ImageType, PostType } from '../types.js';
  import { spacesToDashes } from '../helpers/spacesToDashes.js';
  import { convertDateToNumericString } from '../helpers/convertDateToNumericString.js';
  import BigArrowUp from '../assets/BigArrowUp.svelte';
  import { fetchImageById } from '../routes/api/fetch-post-image';

  export let post: PostType;
  let image: ImageType;
  async function loadImage() {

    if (!post?.acf?.mobile_foto_id) return;
    try {
      image = await fetchImageById(post.acf.mobile_foto_id);
    } catch (error) {
      console.error(error, post);
    }
    return (image = await fetchImageById(post.acf.mobile_foto_id));
  }

  $: if (post?.acf.mobile_foto_id) {
    loadImage();
  }
</script>

<!--MOBILE-->
{#if image}
  <article
    class=" mt-[-1px] grid gap-y-6 border-t border-black py-6 first:border-0 md:hidden"
  >
    <div class="grid gap-y-6">
      <h4 class="  text-mobile14 uppercase">{post.acf.category}</h4>
      <h2 class=" text-mobile18 font-[700]">{post.acf.title}</h2>
    </div>
    <div class="w-full">
      <a class="outline" href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
        <div class="  ">
          <CldImage
            class=" "
            sizes="100vw"
            src="{image.source_url}"
            alt="{image?.alt_text}"
            height="420"
            crop="scale"
            layout="fullWidth"
            quality="100"
          />
        </div>
      </a>
      <p class="mt-6 line-clamp-4">{post.acf.post_description}</p>
    </div>
  </article>
{/if}

<!--MD-->
{#if image}
  <article class=" mt-[-1px] hidden py-8 pt-8 md:grid 1280:hidden">
    <div class=" md:grid md:grid-cols-2 md:gap-x-12">
      <a class="" href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
        <CldImage
          class=" "
          sizes="50vw"
          src="{image.source_url}"
          alt="{image.alt_text}"
          height="320"
          layout="fullWidth"
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
{/if}
<!--1280-->
{#if image}
  <a class="" href="{`/blog/${spacesToDashes(post.acf.slug)}`}">
    <article class=" mt-[-1px] hidden gap-x-24 py-12 pt-12 1280:flex">
      <div class="  flex w-[calc(550/1440*100vw)] shrink-0 flex-col uppercase">
        <h2 class="  text-[3rem] font-[700] leading-tight">
          <span class="line-clamp-5"> {post.acf.title} <BigArrowUp /></span>
        </h2>
        <h4 class=" pt-1 text-desktop24">{post.acf.category}</h4>
        <p class=" mt-auto pt-24 text-desktop24">
          {convertDateToNumericString(post.date)}
        </p>
      </div>

      <div class=" md:grid md:grid-cols-2 1280:gap-x-16">
        <CldImage
          width="{269}"
          height="{323}"
          src="{image.source_url}"
          alt="{image.alt_text}"
          sizes="100vw"
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
