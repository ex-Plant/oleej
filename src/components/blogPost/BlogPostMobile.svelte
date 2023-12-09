<script lang="ts">
  import { convertDateToNumericString } from '../../helpers/convertDateToNumericString';
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import { customSanitization } from '../../helpers/customSanitization';
  import SmallArowUp from '../../assets/SmallArowUp.svelte';
  import type { ImageType, PostType } from "../../types";
  export let globalFoto: ImageType;
  export let postFoto: ImageType;
  export let postBySlug: PostType;
  export let timeString: string;
  $: post_description = postBySlug.acf.post_description
  $: category = postBySlug.acf.category
  $: title = postBySlug.acf.title
  $: post_content = postBySlug.acf.post_content
  $: caption = postFoto?.caption?.rendered;
  $: publishDate = convertDateToNumericString(postBySlug.date);
</script>

<section class=" grid gap-y-6 pt-6">
  {#if category}
    <h3 class="w-full text-center text-mobile14 uppercase ">{category}</h3>
  {/if}
  <h1 class="w-full text-center text-mobile18 font-bold">{title}</h1>

  <div class="mx-auto">
    <p class='text-mobile12 pb-3'> Czyta się ok {timeString} minut</p>
    <img class=" z-[-100]" src="{postFoto?.source_url}" alt="alt" />
    <p class="text-xs w-full pt-3 text-10">
      {@html customSanitization(caption)}
    </p>
  </div>
  <p class="border-b border-black pb-6 text-mobile16">
    {post_description}
  </p>
  <div
    class=" postContent text-mobile16 border-b border-black [&_h1]:py-6 [&_h2]:py-6 [&_h3]:py-6 [&_h4]:py-6 [&_h5]:py-6 [&_h6]:py-6 [&_p]:py-6"
  >
    {@html customSanitization(post_content)}
  </div>
  <div class='grid '>
    <p class="h-7 text-mobile14">
      <span class="pr-1">Data publikacji: </span><span class="font-[700]"
    >{publishDate}</span
    >
    </p>

    <p class=" flex h-6 items-center space-x-2 text-mobile14 font-bold uppercase">
      <span>UDOSTĘPNIJ</span>
      <SmallArowUp />
    </p>
  </div>

</section>

<section title="skontaktuj się ze mną " class="flex gap-x-6 py-6">
  <div class=" aspect-[200/160] max-h-[160px] grow-0 ">
    <img
      class="aspect-[200/160] h-full object-cover"
      src="{globalFoto?.source_url}"
      alt="alt"
    />
  </div>

  <div class=" flex flex-col justify-center">
    <p class="h-6 text-mobile14">Autor</p>
    <p class="h-8 text-mobile18 font-bold">Piotr Olejnik</p>
    <div class="flex gap-x-3">
      <div>
        <BigArrowDown />
      </div>

      <p class="flex flex-col text-14 font-bold uppercase">
        <span>NAPISZ</span><span>DO MNIE</span>
      </p>
    </div>
  </div>
</section>
