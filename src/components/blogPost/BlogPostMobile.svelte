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

<section class=" grid gap-y-6 pt-6">
  {#if post?.category}
    <h3 class="w-full text-center text-mobile14 uppercase ">{post.category}</h3>
  {/if}
  <h1 class="w-full text-center text-mobile28 font-bold">{post.title}</h1>

  <div class=" ">
    <p class='text-mobile12 pb-3'> Czyta się ok {timeString} minut</p>
    <CldImage
      sizes="(max-width: 768px) 100vw"
      width="768"
      class="object-top"
      aspectRatio={316/260}
      height='auto'
      src="{postFoto?.source_url}"
      alt="{postFoto?.alt_text}"
    />
    <p class="text-xs w-full pt-3 text-10">
      {@html customSanitization(postFoto?.caption?.rendered)}
    </p>
  </div>
  <p class="border-b border-black pb-6 text-[26px]">
    {post.post_description}
  </p>
  <div
    class=" postContent text-mobile18 [&:h1]:text-[24px] [&_*]:leading-[200%] border-b border-black [&_p]:py-6 0  [&:p]:py-2 [&_h1]:py-2 [&_h2]:py-2 [&_h3]:py-2 [&_h4]:py-2 [&_h5]:py-2 [&_*]:p-2 [&_*]:block [&_b]:px-0 [&_*]px-0 [&_strong]:px-0
    [&_h6]:py-2"
  >
    {@html customSanitization(post_content)}
  </div>
  <p class='text-[24px]'>
    naglowek
  </p>
<!--  <div class='  leading-[170%] text-[20px]  tracking-[-0.8px]   '>-->
<!--  </div>-->
  <div class='grid '>
    <p class="h-7 text-mobile14">
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
