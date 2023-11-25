<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  const { post, fotoData, category, globalFoto } = data;
  const { title, post_description, slug, post_content } = post.acf;
  console.log('=>(+page.svelte:14) {globalFoto}', { globalFoto });
</script>

<div class="flex flex-col gap-y-6 pt-6">
  {#if category}
    <h3 class="w-full text-center text-14 uppercase">{category}</h3>
  {/if}

  <h1 class="w-full pb-6 text-center text-18 font-bold uppercase">{title}</h1>

  <div>
    <img class=" z-[-100]" src="{fotoData.source_url}" alt="alt" />
    <span class="text-xs w-full">caption</span>
  </div>

  <p class="border-b border-black pb-6">
    {post_description}
  </p>

  <div class=" -mt-6 border-b border-black pb-6 [&_*]:py-6">
    {@html post_content}
  </div>
  <p class=" ">Data publikacji:</p>
  <p>UDOSTĘPNIJ</p>

  <div class="pb-12 grid grid-cols-2 gap-x-10">
    <img class="" src="{globalFoto.source_url}" alt="alt" />
    <div class=' flex flex-col justify-center'>
      <p>autor</p>
      <p>Piotr olejnik</p>
      <p>Napisz do mnie</p>
    </div>
  </div>
</div>
