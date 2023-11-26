<script lang="ts">
  import type { PageData } from './$types';
  import { customSanitization } from '../../../helpers/customSanitization';
  import { goto } from '$app/navigation';
  import SmallArowUp from '../../../assets/SmallArowUp.svelte';
  import BigArrowDown from '../../../assets/BigArrowDown.svelte';
  export let data: PageData;
  const { globalFoto, postFoto, postBySlug } = data;
  if (!postBySlug) {
    // Assuming you have a custom 404 page at /404
    goto('/404');
    throw new Error('Missing post data');
  }

  const { title, post_description, category, post_content } = postBySlug.acf;

  let caption = postFoto?.caption?.rendered;
</script>

<section class="mx-auto flex max-w-[1440px] flex-col gap-y-6 pt-6">
  {#if category}
    <h3 class="w-full text-center text-14 uppercase">{category}</h3>
  {/if}
  <h1 class="w-full text-center text-18 font-bold uppercase">{title}</h1>

  <div class="mx-auto">
    <img class=" z-[-100]" src="{postFoto?.source_url}" alt="alt" />
    <p class="text-xs w-full pt-3 text-12">
      {@html customSanitization(caption)}
    </p>
  </div>

  <p class="border-b border-black pb-6">
    {post_description}
  </p>

  <div class="  border-b border-black pb-6 [&_*]:py-6">
    {@html customSanitization(post_content)}
  </div>
</section>

<div class="py-6">
  <p class="h-7 text-14">Data publikacji:</p>
  <p class=" flex h-6 items-center space-x-2 text-14 font-bold uppercase">
    <span>UDOSTĘPNIJ</span>
    <SmallArowUp />
  </p>
</div>

<div class="grid grid-cols-2 gap-x-6 pb-12">
  <img class="" src="{globalFoto.source_url}" alt="alt" />
  <div class=" flex flex-col justify-center">
    <p class="h-6 text-14">Autor</p>
    <p class="h-8 text-18 font-bold">Piotr Olejnik</p>
    <div class="flex gap-x-3">
      <BigArrowDown />
      <p class="flex flex-col text-14 font-bold uppercase">
        <span>NAPISZ</span><span>DO MNIE</span>
      </p>
    </div>
  </div>
</div>
