<script lang="ts">
  import type { ImageType, PostType } from '../../types';
  import { convertDateToNumericString } from '../../helpers/convertDateToNumericString';
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import SmallArrowUp from '../../assets/SmallArowUp.svelte';
  import { CldImage } from 'svelte-cloudinary';
  import FooterPostList from './FooterPostList.svelte';
  import { page } from '$app/stores';

  export let postData: PostType;
  export let post_content: string;
  export let timeString: string;

  const images = $page.data.images;
  const globalFoto = $page.data.globalFoto;
  const postFoto = images?.find(
    (foto: ImageType) => foto.id === postData?.acf.blog_desktop_foto_id,
  );
  const postSideFoto = images?.find(
    (foto: ImageType) => foto.id === postData?.acf.blog_right_side_foto_id,
  );

  const posts = $page?.data?.allPosts.posts;
  const post = postData?.acf;
  const publishDate = convertDateToNumericString(postData?.date);
  const currPostIndex = posts.findIndex((p: PostType) => p.slug === post.slug);

  let nextPostSlug = posts[0]?.slug;

  if (currPostIndex >= 0 && currPostIndex < posts.length - 1) {
    nextPostSlug = posts[currPostIndex + 1]?.slug;
  }
  const nextBlogPostLink = `/blog/${nextPostSlug}`;
</script>

<main class="px-primary mx-auto grid max-w-[1440px] flex-col pt-12">
  <header
    class=" grid grid-cols-[clamp(115px,14vw,230px)_auto_clamp(115px,14vw,230px)]"
  >
    <div class="aspect-square w-[clamp(50px,calc(100/1440*100vw),100px)]">
      <BigArrowDown />
    </div>
    <div class="flex w-full flex-col pr-[clamp(65px,9vw,130px)]">
      <div class="flex items-center gap-x-4">
        {#if post.category}
          <h3 class=" text-[1.5rem] uppercase">
            {post.category}
          </h3>
        {/if}
        <span class="pt-1">
          <span>czyta się </span>
          <span class="font-bold">
            {timeString}
          </span>
        </span>
      </div>
      <h1
        class="w-full pt-4 text-[2.5rem] font-bold leading-[110%] 1280:text-[4rem]"
      >
        {post.title}
      </h1>
    </div>
    <div class=" flex items-start justify-end">
      <a
        href="{nextBlogPostLink}"
        class="group relative whitespace-nowrap pb-1 text-right 1280:text-[1.25rem]"
      >
        <span> KOLEJNY ARTYKUL </span>
        <span
          class="{'absolute bottom-[-3px] left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full'}"
        >
        </span>
      </a>
    </div>
  </header>

  <div class="w-full pt-12">
    {#if postFoto}
      <CldImage
        sizes="(max-width: 1320px), 100vw"
        height="auto"
        width="{1320}"
        aspectRatio="{1320 / 327}"
        placeholder="blur"
        src="{postFoto?.source_url}"
        alt="{postFoto?.alt_text}"
      />
    {/if}
    <p class="text-xs w-full pt-2 text-12">
      {@html customSanitization(postFoto?.caption?.rendered)}
    </p>
  </div>
  <section
    title="treść posta"
    class="grid grid-cols-[auto_clamp(115px,16vw,230px)] pl-[clamp(115px,16vw,230px)] pt-7"
  >
    <div class="grid">
      <p
        class="border-b border-black pb-12 text-[1.5rem] font-bold leading-[125%]"
      >
        {post.post_description}
      </p>
      <div
        class=" postContent [&_*]px-0 prose py-12 [&_p]:pb-3 [&_strong]:px-0 [&_strong]:font-bold"
      >
        {@html customSanitization(post_content)}
      </div>

      <div class=" flex items-center">
        <p class="text-[1.25rem]">
          <span class="pr-1">Data publikacji: </span><span class="font-[700]"
            >{publishDate}</span
          >
        </p>
        <p class="  flex h-6 items-center space-x-2 pl-12 font-bold uppercase">
          <button on:click="{() => alert('oh hi mark!')}">UDOSTĘPNIJ</button>
          <SmallArrowUp />
        </p>
      </div>
    </div>
    <aside class="flex items-center pl-8">
      {#if postSideFoto}
        <CldImage
          sizes="(max-width: 204px), 16vw"
          height="auto"
          width="{204}"
          aspectRatio="{204 / 311}"
          src="{postSideFoto?.source_url}"
          alt="{postSideFoto?.alt_text}"
        />
      {/if}
    </aside>
  </section>

  <section
    title="skontaktuj się ze mną"
    class="mb-12 flex h-[160px] items-center gap-x-4"
  >
    <div class="w-[clamp(115px,16vw,230px)] pr-8">
      <div class=" flex w-full flex-none">
        <CldImage
          sizes="(max-width: 200px), 16vw"
          height="auto"
          width="{200}"
          aspectRatio="{200 / 160}"
          src="{globalFoto?.source_url}"
          alt="{globalFoto?.alt_text}"
        />
      </div>
    </div>

    <div class=" flex flex-col justify-center">
      <p class="h-6 text-desktop16">Autor</p>
      <p class="h-8 text-desktop24 font-bold">Piotr Olejnik</p>
    </div>
    <div class="mt-6 h-12">
      <BigArrowDown />
    </div>
  </section>
</main>
<FooterPostList />
