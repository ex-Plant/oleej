<script lang="ts">
  import type { BlogPost, PostType } from '../../types';
  import { convertDateToNumericString } from '../../helpers/convertDateToNumericString';
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import SmallArrowUp from '../../assets/SmallArowUp.svelte';
  import FooterPostList from './FooterPostList.svelte';
  import { page } from '$app/stores';
  import CommentsSection from './CommentsSection.svelte';
  import { CldImage } from 'svelte-cloudinary';

  export let timeString: string;
  export let blogPost: BlogPost;
  export let title: string;
  export let date: string;
  export let aboutMeImage: {
    mediaItemUrl: string;
    altText: string;
  };
  $: category = blogPost?.category;
  $: postDescription = blogPost?.postDescription;
  $: blogDesktopFotoId = blogPost?.blogDesktopFotoId;
  $: blogSecondFotoId = blogPost?.blogSecondFotoId;
  $: blogThirdFotoId = blogPost?.blogThirdFotoId;
  $: blogRightSideFotoId = blogPost?.blogRightSideFotoId;
  $: publishDate = convertDateToNumericString(date);

  const posts = $page?.data?.post.data.posts.nodes;

  let dialog: HTMLDialogElement;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  $: currPostIndex = posts.findIndex((p: PostType) => p.slug === $page.params.slug);
  $: nextPostSlug = posts[0]?.slug;
  //
  $: if (currPostIndex >= 0 && currPostIndex < posts.length - 1) {
    nextPostSlug = posts[currPostIndex + 1]?.slug;
  } else {
    nextPostSlug = posts[0]?.slug;
  }
  $: nextBlogPostLink = `/blog/${nextPostSlug}`;

  const saveLink = async () => {
    try {
      await navigator.clipboard.writeText($page.url.href);
      dialog.show();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dialog.close();
      }, 1000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
</script>

<main class="px-primary mx-auto grid max-w-[1440px] flex-col pt-12">
  <header class=" grid grid-cols-[clamp(115px,14vw,230px)_auto_clamp(115px,14vw,230px)]">
    <div class="aspect-square w-[clamp(50px,calc(100/1440*100vw),100px)]">
      <BigArrowDown />
    </div>

    <div class="flex w-full flex-col pr-[clamp(65px,9vw,130px)]">
      <div class="flex items-center gap-x-4">
        {#if category}
          <h3 class=" text-[1.125rem] uppercase">
            {category}
          </h3>
        {/if}
        <span class="pt-1">
          <span>czyta się </span>
          <span class="font-bold">
            {timeString}
          </span>
        </span>
      </div>
      <h1 class="w-full pt-4 text-[2.5rem] font-bold leading-[100%] lg:text-[3.5625rem] 1280:text-[4rem]">
        {title}
      </h1>
    </div>
    <div class=" flex items-start justify-end">
      <a href="{nextBlogPostLink}" class="group relative whitespace-nowrap pb-1 text-right text-[1.125rem]">
        <span> KOLEJNY ARTYKUL </span>
        <span
          class="{'absolute bottom-[-2px] left-[50%] h-[1px] w-0 rounded bg-black duration-300 group-hover:left-0 group-hover:w-full'}"
        >
        </span>
      </a>
    </div>
  </header>

  <div class="w-full pt-12">
    <CldImage
      sizes="(max-width: 1320px), 100vw"
      aspectRatio="{1320 / 327}"
      height="auto"
      width="auto"
      alt="{blogDesktopFotoId.node.altText || 'zdjęcie do artykułu'}"
      src="{blogDesktopFotoId.node.mediaItemUrl}"
      quality="80"
    />
    {#if blogDesktopFotoId?.node?.caption}
      <p class=" w-full pt-2.5 text-[0.75rem] md:text-12">
        {@html customSanitization(blogDesktopFotoId.node.caption)}
      </p>
    {/if}
  </div>
  <section class="grid pl-[clamp(115px,16vw,230px)] pt-7">
    <div class="grid">
      <div
        class="border-b-[2px] border-black pb-12 pr-[clamp(115px,16vw,230px)] text-[1.5rem] font-bold leading-[125%]"
      >
        {postDescription}
      </div>
      <div class="grid grid-cols-[auto_clamp(115px,16vw,230px)]">
        <div>
          <div class="blog-post-container postContent py-12">
            {@html customSanitization(blogPost.postContent)}
          </div>
          {#if blogSecondFotoId}
            <div class="w-full pb-12">
              <CldImage
                sizes="(max-width: 1320px), 100vw"
                aspectRatio="{1320 / 327}"
                height="auto"
                width="auto"
                alt="{blogSecondFotoId.node.altText || 'zdjęcie do artykułu'}"
                src="{blogSecondFotoId.node.mediaItemUrl}"
                quality="80"
              />
              {#if blogSecondFotoId?.node?.caption}
                <p class=" w-full pt-2.5 text-[0.75rem] md:text-12">
                  {@html customSanitization(blogSecondFotoId.node.caption)}
                </p>
              {/if}
            </div>
          {/if}

          {#if blogPost.postContentSecond}
            <div class="blog-post-container postContent pb-12">
              {@html customSanitization(blogPost.postContentSecond)}
            </div>
          {/if}
          {#if blogThirdFotoId}
            <div class="w-full pb-12">
              <CldImage
                class=" hidden shadow-[inset_0_0_0_1px_black] md:block"
                sizes="(max-width: 1320px), 100vw"
                aspectRatio="{1320 / 327}"
                height="auto"
                width="auto"
                alt="{blogThirdFotoId.node.altText || 'zdjęcie do artykułu'}"
                src="{blogThirdFotoId.node.mediaItemUrl}"
                quality="80"
              />
              {#if blogThirdFotoId?.node?.caption}
                <p class=" w-full pt-2.5 text-[0.75rem] md:text-12">
                  {@html customSanitization(blogThirdFotoId.node.caption)}
                </p>
              {/if}
            </div>


          {/if}

          {#if blogPost.postContentThird}
            <div class="blog-post-container postContent pb-12">
              {@html customSanitization(blogPost.postContentThird)}
            </div>
          {/if}
          <div class=" relative flex items-center">
            <p class="">
              <span class="pr-1">Data publikacji: </span><span class="font-[700]">{publishDate}</span>
            </p>
            <button on:click="{saveLink}" class="  flex h-6 items-center space-x-2 pl-12 font-bold uppercase">
              <span>UDOSTĘPNIJ</span>
              <SmallArrowUp />
            </button>
            <dialog class="  absolute left-0 top-0 translate-y-1/2 rounded" bind:this="{dialog}">
              skopiowano do schowka
            </dialog>
          </div>
        </div>
        <aside class="flex items-center pl-8">
          {#if blogRightSideFotoId}
            <CldImage
              sizes="(max-width: 204px), 16vw"
              aspectRatio="{204 / 311}"
              height="auto"
              width="auto"
              alt="{blogRightSideFotoId.node.altText || 'zdjęcie do artykułu'}"
              src="{blogRightSideFotoId.node.mediaItemUrl}"
            />
          {/if}
        </aside>
      </div>
    </div>
  </section>

  <a href="/o-mnie" class="group mb-12 flex h-[160px] items-center">
    {#if aboutMeImage}
      <div class="w-[clamp(115px,16vw,230px)] pr-8">
        <div class=" flex w-full flex-none">
          <CldImage
            class="object-top"
            sizes="(max-width: 200px), 16vw"
            height="auto"
            width="auto"
            aspectRatio="{200 / 160}"
            alt="{aboutMeImage.altText}"
            src="{aboutMeImage.mediaItemUrl}"
          />
        </div>
      </div>
    {/if}

    <div class=" flex flex-col justify-center">
      <p class="h-6 text-desktop16">Autor</p>
      <p class="h-8 text-desktop24 font-bold">Piotr Olejnik</p>
    </div>
    <div class="mt-6 ml-3 h-12 duration-500 group-hover:scale-125">
      <BigArrowDown />
    </div>
  </a>
  <div class="pb-12 pl-[clamp(115px,16vw,230px)] pr-[clamp(65px,9vw,130px)]">
    <CommentsSection />
  </div>
</main>
<FooterPostList />
