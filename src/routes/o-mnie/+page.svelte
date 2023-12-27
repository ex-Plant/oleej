<script lang="ts">
  /** @type {import('./$types').PageData} */

  import { CldImage } from 'svelte-cloudinary';
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowUp from '../../assets/BigArrowUp.svelte';
  import { aboutPageStore } from "../../store/global";

  $: data = $aboutPageStore;

</script>

<main
  class="mx-auto grid max-w-[1440px] gap-y-6 px-[clamp(20px,6vw,60px)] py-6 pb-12 md:gap-y-12"
>
  <p class="text-xs w-full text-mobile16 md:text-desktop40">
    {@html customSanitization(data.main_text)}
  </p>
  <div
    class="flex items-center justify-center md:gap-x-12 lg:justify-end lg:gap-x-16"
  >
    <div class=" hidden flex-col items-end gap-y-6 lg:flex xl:gap-y-12">
      {#if data?.small_foto?.source_url}
        <CldImage
          sizes="(max-width: 256px) 18vw"
          src="{data?.small_foto?.source_url}"
          alt="{data?.small_foto?.alt_text}"
          height="auto"
          width="256"
          aspectRatio={256/128}
        />
      {/if}
      {#if data.secondary_foto?.source_url}
        <div
          class="mr-10 hidden aspect-[350/210] w-[280px] lg:block xl:mr-20 xl:w-[350px]"
        >
          <CldImage
            src="{data.secondary_foto.source_url}"
            alt="{data.secondary_foto?.alt_text}"
            aspectRatio={350/210}
            height="auto"
            width="350"
            sizes="(max-width: 350px) 25vw"
          />
        </div>
      {/if}
    </div>
    {#if data.mainFoto?.source_url}
      <CldImage
        class="object-top hidden lg:block "
        src="{data.mainFoto.source_url}"
        alt="{data.mainFoto?.alt_text}"
        height="693"
        aspectRatio={570/693}
        width="570"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
      <CldImage
        class="object-top lg:hidden "
        src="{data.mainFoto.source_url}"
        alt="{data.mainFoto?.alt_text}"
        aspectRatio={335/277}
        width={1024}
        height="auto"
        sizes="(max-width: 1024px) 100vw"
      />
    {/if}
  </div>
  <div class="text-mobile16 font-bold md:text-desktop64">
    {@html customSanitization(data.txt_under_pictures)}
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
