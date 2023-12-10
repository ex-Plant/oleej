<script lang="ts">
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowUp from "../../assets/BigArrowUp.svelte";
  import type { AboutMePageProps } from "../../types";

  export let data : AboutMePageProps;
  const {
    mainFoto,
    secondary_foto,
    small_foto,
    main_text,
    txt_under_pictures,
  } = data;

</script>

<main class="grid gap-y-6 px-[clamp(20px,6vw,60px)] py-6 pb-12 md:gap-y-12 max-w-[1440px] mx-auto">
<p class="text-xs w-full text-mobile16 md:text-desktop40">
    {@html customSanitization(main_text)}
  </p>
  <div class="flex items-center justify-center lg:justify-end md:gap-x-12 lg:gap-x-16">

    <div class=' hidden lg:flex flex-col items-end gap-y-6 xl:gap-y-12  '>
      {#if small_foto?.source_url}
        <div class=' aspect-video w-[256px] h-[128px]'>
          <img
            class=" h-full object-cover"
            src="{small_foto?.source_url}"
            alt="alt"
          />
        </div>

      {/if}
      {#if secondary_foto?.source_url}
        <div class='hidden lg:block mr-10 xl:mr-20  w-[280px] xl:w-[350px] aspect-[350/210]  '>
          <img
            class=" h-full object-cover"
            src="{secondary_foto?.source_url}"
            alt="alt"
          />
        </div>

      {/if}

    </div>
    {#if mainFoto?.source_url}
    <img
      class=" h-full object-cover md:w-[570px] md:h-[693px]"
      src="{mainFoto?.source_url}"
      alt="alt"
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
    <span class="whitespace-nowrap text-mobile34 "> NAPISZ DO MNIE </span>
    <div>
      <BigArrowUp />
    </div>
  </div>
</a>
