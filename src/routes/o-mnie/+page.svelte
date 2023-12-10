<script lang="ts">
  /** @type {import('./$types').PageData} */

  export const prerender = true;
  import { onMount } from 'svelte';
  import { CldImage } from 'svelte-cloudinary';
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowUp from '../../assets/BigArrowUp.svelte';

  export let data;

  const {
    mainFoto,
    secondary_foto,
    small_foto,
    main_text,
    txt_under_pictures,
  } = data;

  onMount(() => window.scrollTo(0, 0));

</script>

<main
  class="mx-auto grid max-w-[1440px] gap-y-6 px-[clamp(20px,6vw,60px)] py-6 pb-12 md:gap-y-12"
>
  <p class="text-xs w-full text-mobile16 md:text-desktop40">
    {@html customSanitization(main_text)}
  </p>
  <div
    class="flex items-center justify-center md:gap-x-12 lg:justify-end lg:gap-x-16"
  >
    <div class=" hidden flex-col items-end gap-y-6 lg:flex xl:gap-y-12">
      {#if small_foto?.source_url}
        <CldImage
          class=" "
          sizes="100vw"
          src="{small_foto?.source_url}"
          alt="{small_foto?.alt_text}"
          height="128"
          width="256"
        />
      {/if}
      {#if secondary_foto?.source_url}
        <div
          class="mr-10 hidden aspect-[350/210] w-[280px] lg:block xl:mr-20 xl:w-[350px]"
        >
          <CldImage
            class=" "
            src="{secondary_foto.source_url}"
            alt="{secondary_foto?.alt_text}"
            height="210"
            width="350"
            sizes="(min-width: 768px) 280px, (min-width: 1280px) 350px"
          />
        </div>
      {/if}
    </div>
    {#if mainFoto?.source_url}
      <CldImage
        class=" "
        src="{mainFoto.source_url}"
        alt="{mainFoto?.alt_text}"
        height="693"
        width="570"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
    {/if}
  </div>
  <div class="text-mobile16 font-bold md:text-desktop64">
    {@html customSanitization(txt_under_pictures)}
  </div>
</main>
<a href="/kontakt">
  <div
    class="flex items-center justify-center space-x-6 border-t border-black px-[clamp(20px,6vw,60px)] py-8"
  >
    <span class="whitespace-nowrap text-mobile28 sm:text-mobile34 "> NAPISZ DO MNIE </span>
    <div>
      <BigArrowUp />
    </div>
  </div>
</a>
