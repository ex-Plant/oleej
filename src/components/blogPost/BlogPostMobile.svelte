<script lang="ts">
  import type { PostType } from "../../types";
  import { convertDateToNumericString } from '../../helpers/convertDateToNumericString';
  import { customSanitization } from '../../helpers/customSanitization';
  import { CldImage } from "svelte-cloudinary";

  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import SmallArrowUp from '../../assets/SmallArowUp.svelte';
  import { blogPost_mobile_fotosStore, globalFotoStore } from "../../store/global";


  $: globalFoto = $globalFotoStore;
  $: blogMobileFotos = $blogPost_mobile_fotosStore;
  $: postFoto = blogMobileFotos?.find((foto) => foto.id === postData?.acf.mobile_foto_id);

  export let postData: PostType;
  export let post_content: string;
  export let timeString: string;

  $: post = postData?.acf;
  $: publishDate = convertDateToNumericString(postData?.date);

</script>

<section class=" grid">
  {#if post?.category}
    <h3 class="w-full pt-7 text-[0.875rem] uppercase  ">{post.category}</h3>
  {/if}
  <h1 class="w-full text-[1.75rem] font-bold uppercase pt-7">{post.title}</h1>

  <div class=" ">
    <p class='text-[0.75rem] pt-7 pb-2.5 '> <span>
      Czyta się około:
    </span>
      <span class='font-bold'>
        {timeString}
      </span></p>
    <CldImage
      sizes="(max-width: 768px) 100vw"
      width="768"
      class="object-top"
      aspectRatio={316/260}
      height='auto'
      src="{postFoto?.source_url}"
      alt="{postFoto?.alt_text}"
    />
    <p class="text-xs w-full pt-2.5 text-[0.75rem]">
      {@html customSanitization(postFoto?.caption?.rendered)}
    </p>
  </div>
  <p class="border-b border-black py-7 text-[1.25rem] leading-[100%] font-bold">
    {post.post_description}
  </p>
    <div
      class=" prose postContent [&_p]:pb-3 [&_*]:block [&_*]px-0 [&_strong]:px-0 [&_strong]:font-bold py-7 border-b border-black "
    >
      {@html customSanitization(post_content)}
    </div>

<!--  <div class='  leading-[170%] text-[20px]  tracking-[-0.8px]   '>-->
<!--  </div>-->
  <div class='grid pt-7'>
    <p class="h-7 text-[0.875rem]">
      <span class="pr-1">Data publikacji: </span><span class="font-[700]"
    >{publishDate}</span
    >
    </p>

    <p class=" flex h-6 items-center space-x-2 text-mobile14 font-bold uppercase">
      <span>UDOSTĘPNIJ</span>
      <SmallArrowUp />
    </p>
  </div>

</section>

<section title="skontaktuj się ze mną " class="grid grid-cols-2 gap-x-6 py-6   ">
  <div class=" flex   ">
    <CldImage
      sizes="(max-width: 768px) 50vw"
      aspectRatio={150/120}
      height="auto"
      width="384"
      src="{globalFoto?.source_url}"
      alt="alt"
    />
  </div>

  <div class=" flex flex-col justify-center">
    <p class="h-6 text-mobile14">Autor</p>
    <p class=" pb-6 text-mobile18 font-bold">Piotr Olejnik</p>
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
