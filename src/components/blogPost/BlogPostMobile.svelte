<script lang="ts">
  import type { BlogPost } from '../../types';
  import { convertDateToNumericString } from '../../helpers/convertDateToNumericString';
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import SmallArrowUp from '../../assets/SmallArowUp.svelte';
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
  $: mobileFotoId = blogPost?.mobileFotoId;
  $: blogSecondFotoId = blogPost?.blogSecondFotoId;
  $: blogThirdFotoId = blogPost?.blogThirdFotoId;
  $: publishDate = convertDateToNumericString(date);

  let dialog: HTMLDialogElement;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

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

<section class=" grid">
  {#if category}
    <h3 class="w-full pt-7 text-[0.875rem] uppercase">{category}</h3>
  {/if}
  <h1 class="w-full pt-4 text-[1.75rem] font-bold uppercase leading-[114%]">
    {title}
  </h1>

  <div class=" ">
    <p class="pb-2.5 pt-4 text-[0.75rem]">
      <span> Czyta się około: </span>
      <span class="font-bold">
        {timeString}
      </span>
    </p>
    <CldImage
      class="object-top md:hidden"
      sizes="(max-width: 768px) 100vw"
      aspectRatio="{316 / 260}"
      height="auto"
      width="768"
      alt="{mobileFotoId.node.altText || 'zdjęcie do artykułu'}"
      src="{mobileFotoId.node.mediaItemUrl}"
    />
    {#if mobileFotoId?.node?.caption}
      <p class="pb-2.5 pt-4 text-[0.75rem]">
        {@html customSanitization(mobileFotoId.node.caption)}
      </p>
    {/if}
  </div>
  <p class="border-b-[2px] border-black py-7 text-[1.25rem] font-bold leading-[110%]">
    {postDescription}
  </p>
  <div class="border-b-[2px] border-black">
    <div class="postContent py-7">
      {@html customSanitization(blogPost?.postContent)}
    </div>
    {#if blogSecondFotoId}
      <CldImage
        class="object-top md:hidden"
        sizes="(max-width: 768px) 100vw"
        aspectRatio="{316 / 130}"
        height="auto"
        width="768"
        alt="{blogSecondFotoId.node.altText || 'zdjęcie do artykułu'}"
        src="{blogSecondFotoId.node.mediaItemUrl}"
      />
    {/if}
    {#if blogSecondFotoId?.node?.caption}
      <p class="pb-2.5 pt-4 text-[0.75rem]">
        {@html customSanitization(mobileFotoId.node.caption)}
      </p>
    {/if}
    {#if blogPost?.postContentSecond}
      <div class="postContent py-7">
        {@html customSanitization(blogPost?.postContentSecond)}
      </div>
    {/if}
    {#if blogThirdFotoId}
      <CldImage
        class="object-top  md:hidden"
        sizes="(max-width: 768px) 100vw"
        aspectRatio="{316 / 130}"
        height="auto"
        width="768"
        alt="{blogThirdFotoId.node.altText || 'zdjęcie do artykułu'}"
        src="{blogThirdFotoId.node.mediaItemUrl}"
      />
    {/if}
    {#if blogThirdFotoId?.node?.caption}
      <p class="pb-2.5 pt-4 text-[0.75rem]">
        {@html customSanitization(mobileFotoId.node.caption)}
      </p>
    {/if}
    {#if blogPost?.postContentThird}
      <div class="postContent py-7">
        {@html customSanitization(blogPost?.postContentThird)}
      </div>
    {/if}
  </div>

  <div class="relative grid pt-7">
    <p class="h-7 text-[0.875rem]">
      <span class="pr-1">Data publikacji: </span><span class="font-[700]">{publishDate}</span>
    </p>

    <button on:click="{saveLink}" class=" flex h-6 items-center space-x-2 text-[0.875rem] font-bold uppercase">
      <span>UDOSTĘPNIJ</span>
      <SmallArrowUp />
    </button>
    <dialog class=" absolute right-0 top-0 translate-y-1/2 rounded text-[10px]" bind:this="{dialog}">
      skopiowano do schowka
    </dialog>
  </div>
</section>

<section class="grid grid-cols-2 gap-x-6 py-6">
  <div class=" flex">
    <CldImage
      sizes="(max-width: 768px) 50vw"
      aspectRatio="{150 / 120}"
      height="auto"
      width="384"
      alt="{aboutMeImage.altText || 'zdjęcie autora'}"
      src="{aboutMeImage.mediaItemUrl}"
    />
  </div>

  <a href="/o-mnie" class=" flex flex-col justify-center">
    <p class="h-6 text-[0.875rem]">Autor</p>
    <p class=" pb-6 text-[1.125rem] font-bold">Piotr Olejnik</p>
    <div class="flex gap-x-3">
      <div>
        <BigArrowDown />
      </div>
      <p class="flex flex-col text-14 font-bold uppercase">
        <!--        <span>NAPISZ</span><span>DO MNIE</span>-->
      </p>
    </div>
  </a>
</section>
<div class="mb-8">
  <CommentsSection />
</div>
