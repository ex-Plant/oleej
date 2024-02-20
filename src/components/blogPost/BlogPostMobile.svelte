<script lang="ts">
  import type { ImageType, PostType } from '../../types';
  import { convertDateToNumericString } from '../../helpers/convertDateToNumericString';
  import { customSanitization } from '../../helpers/customSanitization';
  import { CldImage } from 'svelte-cloudinary';
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import SmallArrowUp from '../../assets/SmallArowUp.svelte';
  import { page } from '$app/stores';
  import Comment from './CommentsSection.svelte';

  export let postData: PostType;
  export let post_content: string;
  export let timeString: string;

  const images = $page.data.images;
  const globalFoto = $page.data.globalFoto;
  $: postFoto = images?.find(
    (foto: ImageType) => foto.id === postData?.acf.mobile_foto_id,
  );

  $: post = postData?.acf;
  $: publishDate = convertDateToNumericString(postData?.date);

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
  {#if post?.category}
    <h3 class="w-full pt-7 text-[0.875rem] uppercase">{post.category}</h3>
  {/if}
  <h1 class="w-full pt-4 text-[1.75rem] font-bold uppercase leading-[114%]">
    {post.title}
  </h1>

  <div class=" ">
    <p class="pb-2.5 pt-4 text-[0.75rem]">
      <span> Czyta się około: </span>
      <span class="font-bold">
        {timeString}
      </span>
    </p>
    <CldImage
      sizes="(max-width: 768px) 100vw"
      width="768"
      class="object-top shadow-[inset_0_0_0_1px_black]"
      aspectRatio="{316 / 260}"
      height="auto"
      src="{postFoto?.source_url}"
      alt="{postFoto?.alt_text}"
    />
    <p class="text-xs w-full pt-2.5 text-[0.75rem]">
      {@html customSanitization(postFoto?.caption?.rendered)}
    </p>
  </div>
  <p
    class="border-b-[2px] border-black py-7 text-[1.25rem] font-bold leading-[110%]"
  >
    {post.post_description}
  </p>
  <div class="postContent border-b-[2px] border-black py-7">
    {@html customSanitization(post_content)}
  </div>

  <div class="relative grid pt-7">
    <p class="h-7 text-[0.875rem]">
      <span class="pr-1">Data publikacji: </span><span class="font-[700]"
        >{publishDate}</span
      >
    </p>

    <button
      on:click="{saveLink}"
      class=" flex h-6 items-center space-x-2 text-[0.875rem] font-bold uppercase"
    >
      <span>UDOSTĘPNIJ</span>
      <SmallArrowUp />
    </button>
    <dialog
      class=" absolute right-0 top-0 translate-y-1/2 rounded text-[10px]"
      bind:this="{dialog}"
    >
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
      src="{globalFoto.source_url}"
      alt="alt"
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
        <span>NAPISZ</span><span>DO MNIE</span>
      </p>
    </div>
  </a>
</section>
<div class='mb-8'>
  <Comment post_id="{postData.id}" />
</div>
<style>
  dialog::backdrop {
    background-color: transparent;
  }
</style>
