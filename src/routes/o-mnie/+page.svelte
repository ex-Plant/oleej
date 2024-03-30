<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import { customSanitization } from '../../helpers/customSanitization';
  import BigArrowUp from '../../assets/BigArrowUp.svelte';
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import { fade } from 'svelte/transition';
  export let data;
</script>

<div in:fade="{{ duration: 500 }}">
  <!--mobile-->
  <main class=" gap-y-6 px-[clamp(20px,6vw,60px)] py-12 lg:hidden">
    <div class="text-xs postContent w-full pb-10">
      {@html customSanitization(data.main_text)}
    </div>

    <div class="flex items-center justify-center">
      {#if data.mainFoto?.source_url}
        <CldImage
          class="object-top lg:hidden "
          src="{data.mainFoto.source_url}"
          alt="{data.mainFoto?.alt_text}"
          aspectRatio="{335 / 277}"
          width="auto"
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
      <span class="whitespace-nowrap text-mobile28 sm:text-mobile34"> NAPISZ DO MNIE </span>
      <div>
        <BigArrowUp />
      </div>
    </div>
  </a>

  <!--// desktop -->
  <main
    class="mx-auto hidden max-w-[1440px] grid-cols-[auto_clamp(230px,32vw,460px)] gap-x-20 gap-y-12 py-12 pl-[clamp(115px,16vw,230px)] lg:grid"
  >
    <div>
      <div class="text-xs postContent w-full">
        {@html customSanitization(data.main_text)}
      </div>

      <div class=" group hidden grid-cols-2 gap-x-16 lg:grid">
        <a href="/kontakt">
          <div class=" flex h-full flex-col justify-end py-8">
            <div class=" mb-8 aspect-square w-[clamp(29px,4vw,57px)] duration-500 group-hover:scale-125">
              <BigArrowDown />
            </div>
            <span class="w-[450px] text-[6.25rem] leading-[80%]"> NAPISZ DO MNIE </span>
            <div class="mt-10">
              <div class=" grid text-[1.5rem]">
                <div class="flex h-10 items-end font-bold">
                  <span> piotrolej@gmail.com </span>
                </div>
                <div class="flex h-10 items-end space-x-10">
                  <span class=" font-bold">IG</span>
                  <span class=" ">Olejto</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class=" pr-primary flex justify-end">
      {#if data.mainFoto?.source_url}
        <CldImage
          class="hidden lg:block"
          src="{data.mainFoto.source_url}"
          alt="{data.mainFoto?.alt_text}"
          height="463"
          aspectRatio="{381 / 463}"
          width="auto"
          sizes="(max-width: 1440px) 381px, 32vw"
        />
      {/if}
    </div>
  </main>
</div>
