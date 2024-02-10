<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowUp from '../../assets/BigArrowUp.svelte';
  import { page } from "$app/stores";

   const data = $page.data;
</script>

<main
  class="mx-auto grid max-w-[1440px] gap-y-6 px-[clamp(20px,6vw,60px)] py-6 pb-12 md:gap-y-12"
>
  <p
    class="text-xs postContent [&_*]px-0 prose w-full [&_*]:block [&_p]:pb-3 [&_strong]:px-0 [&_strong]:font-bold"
  >
    {@html customSanitization(data.main_text)}
  </p>
  <div
    class="flex items-center justify-center md:gap-x-12 lg:justify-end lg:gap-x-16"
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
    class="flex items-center justify-center space-x-6 border-t border-black px-[clamp(20px,6vw,60px)] py-8"
  >
    <span class="whitespace-nowrap text-mobile28 sm:text-mobile34">
      NAPISZ DO MNIE
    </span>
    <div>
      <BigArrowUp />
    </div>
  </div>
</a>
