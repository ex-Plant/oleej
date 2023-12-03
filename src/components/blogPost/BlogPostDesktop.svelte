<script lang="ts">
  import { convertDateToNumericString } from '../../helpers/convertDateToNumericString';
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import { customSanitization } from '../../helpers/customSanitization';
  import SmallArowUp from '../../assets/SmallArowUp.svelte';
  import FooterPostList from './FooterPostList.svelte';
  import type { ImageType, PostType } from "../../types";
  export let posts: PostType[];
  export let fotos: ImageType[];
  export let postBySlug: PostType;
  export let postFoto: ImageType;
  export let globalFoto: ImageType;
  export let postSideFoto: ImageType;
  $: post_description = postBySlug.acf.post_description
  $: category = postBySlug.acf.category
  $: title = postBySlug.acf.title
  $: post_content = postBySlug.acf.post_content
  $: caption = postFoto?.caption?.rendered;
  $: publishDate = convertDateToNumericString(postBySlug.date);
</script>

<main
  class="px-primary mx-auto grid max-w-[1440px] flex-col gap-y-6 pt-6 xl:gap-y-12"
>
  <header
    class=" grid grid-cols-[clamp(115px,14vw,230px)_auto_clamp(115px,14vw,230px)]"
  >
    <div class="aspect-square w-[clamp(50px,calc(100/1440*100vw),100px)]">
      <BigArrowDown />
    </div>
    <div class="flex w-full flex-col pr-[clamp(65px,9vw,130px)]">
      <div class="flex gap-x-4 pb-3">
        {#if category}
          <h3 class=" text-desktop24 uppercase">
            {category}
          </h3>
        {/if}
        <span class="text-desktop20">czyta się 420 minut</span>
      </div>
      <h1 class="w-full text-desktop64 font-bold">{title}</h1>
    </div>
    <div>
      <button
        class="whitespace-nowrap text-desktop20 hover:underline"
        on:click="{() => alert('jp2')}"
      >
        KOLEJNY ARTYKUL
      </button>
    </div>
  </header>

  <div class="w-full">
    <img class=" z-[-100] h-[330px] w-full object-cover" src="{postFoto?.source_url}" alt="alt" />
    <p class="text-xs w-full pt-3 text-12">
      {@html customSanitization(caption)}
    </p>
  </div>
  <section
    title="treść posta"
    class="grid grid-cols-[auto_clamp(115px,16vw,230px)] gap-y-6 pl-[clamp(115px,16vw,230px)] xl:gap-y-12"
  >
    <div class="grid gap-y-6 xl:gap-y-12">
      <p class="border-b border-black pb-6 text-desktop24 xl:pb-12">
        {post_description}
      </p>
      <div
        class=" postContent text-desktop20 [&:p]:py-6 [&_h1]:py-6 [&_h2]:py-6 [&_h3]:py-6 [&_h4]:py-6 [&_h5]:py-6
        [&_h6]:py-6"
      >
        {@html customSanitization(post_content)}
      </div>
      <div class=" flex items-center">
        <p class="text-desktop20">
          <span class="pr-1">Data publikacji: </span><span class="font-[700]"
            >{publishDate}</span
          >
        </p>
        <p
          class=" text-desktop14 flex h-6 items-center space-x-2 pl-12 font-bold uppercase"
        >
          <button on:click="{() => alert('oh hi mark!')}">UDOSTĘPNIJ</button>
          <SmallArowUp />
        </p>
      </div>
    </div>
    <aside class="flex items-center pl-8">
      {#if postSideFoto}
        <img src="{postSideFoto?.source_url}" alt="{''}" />
      {/if}
    </aside>
  </section>

  <section
    title="skontaktuj się ze mną"
    class="mb-12 flex h-[160px] items-center gap-x-4"
  >
    <div class="w-[clamp(115px,16vw,230px)] pr-8">
      <div class=" flex w-full flex-none">
        <img
          class="aspect-[160/200] h-[160px] w-full object-cover"
          src="{globalFoto?.source_url}"
          alt="alt"
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
<FooterPostList posts="{posts}" fotos="{fotos}" />
