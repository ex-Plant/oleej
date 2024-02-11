<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowUp from '../../assets/BigArrowUp.svelte';
  import { page } from '$app/stores';

  const data = $page.data;
</script>

<!--mobile-->
<main class=" gap-y-6 px-[clamp(20px,6vw,60px)] py-6 pb-12 lg:hidden">
  <div class="text-xs blog-post-container postContent w-full pb-6">
    {@html customSanitization(data.main_text)}
  </div>

  <div class="flex items-center justify-center">
    {#if data.mainFoto?.source_url}
      <CldImage
        class="object-top lg:hidden "
        src="{data.mainFoto.source_url}"
        alt="{data.mainFoto?.alt_text}"
        aspectRatio="{335 / 277}"
        width="{1024}"
        height="auto"
        sizes="(max-width: 1024px) 100vw"
      />
    {/if}
  </div>
</main>
<a href="/kontakt">
  <div
    class=" flex items-center justify-center space-x-6 border-t border-black px-[clamp(20px,6vw,60px)] py-8 lg:hidden"
  >
    <span class="whitespace-nowrap text-mobile28 sm:text-mobile34">
      NAPISZ DO MNIE
    </span>
    <div>
      <BigArrowUp />
    </div>
  </div>
</a>

<!--// desktop -->
<main
  class=" mx-auto hidden max-w-[1440px] px-[clamp(20px,6vw,60px)] py-6 pb-12 gap-y-12 lg:grid"
>
  <div class="text-xs blog-post-container postContent w-full">
    {@html customSanitization(data.main_text)}
  </div>

  <div
    class="flex items-center justify-end gap-x-16"
  >
    {#if data.mainFoto?.source_url}
      <CldImage
        class="hidden object-top lg:block "
        src="{data.mainFoto.source_url}"
        alt="{data.mainFoto?.alt_text}"
        height="693"
        aspectRatio="{570 / 693}"
        width="570"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
    {/if}
  </div>
</main>
<a href="/kontakt">
  <div
    class="hidden items-center justify-center space-x-6 border-t border-black px-[clamp(20px,6vw,60px)] py-8 lg:flex"
  >
    <span class="whitespace-nowrap text-mobile28 sm:text-mobile34">
      NAPISZ DO MNIE
    </span>
    <div>
      <BigArrowUp />
    </div>
  </div>
</a>
