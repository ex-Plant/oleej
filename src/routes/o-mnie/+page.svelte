<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowUp from '../../assets/BigArrowUp.svelte';
  import { page } from '$app/stores';
  import BigArrowDown from '../../assets/BigArrowDown.svelte';

  const data = $page.data;
</script>

<!--mobile-->
<main class=" gap-y-6 px-[clamp(20px,6vw,60px)] py-6 pb-12 lg:hidden">
  <div
    class="text-xs postContent w-full pb-10
  [&_h1]:text-[1.75rem] [&_h1]:leading-[2rem]
  [&_h2]:text-[1.25rem] [&_h2]:leading-[1.375rem]
  [&_h3]:text-[1.125rem] [&_h3]:leading-[1.25rem]
  [&_h4]:text-[1rem] [&_h4]:leading-[1.325rem]
  [&_h5]:text-[0.875rem] [&_h5]:leading-[1rem]
  [&_h6]:text-[1rem] [&_h6]:leading-[1.4375]

"
  >
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
  class=" mx-auto hidden max-w-[1440px] gap-y-12 px-[clamp(20px,6vw,60px)] py-6 pb-12 lg:grid"
>
  <div
    class="text-xs postContent w-full
 [&_h1]:text-[3.5625rem] [&_h1]:leading-[2.5625rem]
  [&_h2]:text-[1.5rem] [&_h2]:leading-[2rem]
  [&_h3]:text-[1.25rem] [&_h3]:leading-[1.5rem]
  [&_h4]:text-[1.25rem] [&_h4]:leading-[1.625rem]
  [&_h5]:text-[1rem] [&_h5]:leading-[1.25rem]
  [&_h6]:text-[1.125rem] [&_h6]:leading-[1.75]
"
  >
    {@html customSanitization(data.main_text)}
  </div>

  <div class=" hidden grid-cols-2 gap-x-16 lg:grid">
    <a href="/kontakt">
      <div class=" flex h-full flex-col justify-end py-8">
        <div class=" mb-4 aspect-square w-[clamp(29px,4vw,57px)]">
          <BigArrowDown />
        </div>
        <span class="w-[450px] text-[6.25rem] leading-[80%]">
          NAPISZ DO MNIE
        </span>
        <a class="mt-10" href="mailto:piotrolej@gmail.com">
          <div class=" grid text-[1.5rem]">
            <p class="flex h-10 items-end font-bold">
              <span> piotrolej@gmail.com </span>
            </p>
            <p class="flex h-10 items-end space-x-10">
              <span class=" font-bold">IG</span>
              <span class=" ">Olejto</span>
            </p>
          </div>
        </a>
      </div>
    </a>
    <div class=" flex justify-end">
      {#if data.mainFoto?.source_url}
        <CldImage
          class="hidden object-top lg:block "
          src="{data.mainFoto.source_url}"
          alt="{data.mainFoto?.alt_text}"
          height="620"
          aspectRatio="{510 / 620}"
          width="auto"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      {/if}
    </div>
  </div>
</main>
