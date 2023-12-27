<script lang="ts">
  import { page } from '$app/stores';
  import type { ImageType, PostType } from '../../types';
  import { convertDateToNumericString } from '../../helpers/convertDateToNumericString';
  import { customSanitization } from '../../helpers/customSanitization';
  import { spacesToDashes } from '../../helpers/spacesToDashes';
  import BigArrowDown from '../../assets/BigArrowDown.svelte';
  import SmallArrowUp from '../../assets/SmallArowUp.svelte';
  import { CldImage } from "svelte-cloudinary";

  export let postData: PostType;
  export let post_content: string;
  export let postFoto: ImageType;
  export let globalFoto: ImageType;
  export let postSideFoto: ImageType;
  export let timeString: string;

  $: allPosts = $page.data.allPosts;
  $: post = postData?.acf;
  $: publishDate = convertDateToNumericString(postData?.date);
  $: currPostIndex = allPosts.findIndex(
    (p: PostType) => p.acf.slug === post.slug,
  );
  $: nextPostSlug = allPosts[0]?.acf.slug;

  $: if (currPostIndex >= 0 && currPostIndex < allPosts.length - 1) {
    nextPostSlug = allPosts[currPostIndex + 1]?.acf.slug;
  }
  $: nextBlogPostLink = `/blog/${spacesToDashes(nextPostSlug)}`;
</script>

<main
  class="px-primary mx-auto grid max-w-[1440px] flex-col gap-y-6 pt-6 xl:gap-y-12 xl:pt-12"
>
  <header
    class=" grid grid-cols-[clamp(115px,14vw,230px)_auto_clamp(115px,14vw,230px)]"
  >
    <div class="aspect-square w-[clamp(50px,calc(100/1440*100vw),100px)]">
      <BigArrowDown />
    </div>
    <div class="flex w-full flex-col pr-[clamp(65px,9vw,130px)]">
      <div class="flex gap-x-4 pb-3">
        {#if post.category}
          <h3 class=" text-desktop24 uppercase">
            {post.category}
          </h3>
        {/if}
        <span class="text-desktop20">czyta się {timeString} </span>
      </div>
      <h1 class="w-full text-desktop64 font-bold">{post.title}</h1>
    </div>
    <div>
      <a
        href="{nextBlogPostLink}"
        class="group relative whitespace-nowrap pb-1 text-desktop20"
      >
        <span> KOLEJNY ARTYKUL </span>
        <span
          class="{'absolute bottom-[-3px] left-[50%] h-[1px] w-0 rounded bg-black duration-300' +
            ' group-hover:left-0 group-hover:w-full'}"
        >
        </span>
      </a>
    </div>
  </header>

<!--  class=" z-[-100] h-[330px] w-full object-cover" todo-->
  <div class="w-full">
    {#if postFoto}
      <CldImage
        priority={true}
        height="330"
        width="1440"
        quality="100"
        placeholder="blur"
        sizes="100vw"
        src="{postFoto?.source_url}"
        alt="{postFoto?.alt_text}"
      />
    {/if}
    <p class="text-xs w-full pt-3 text-12">
      {@html customSanitization(postFoto?.caption?.rendered)}
    </p>
  </div>
  <section
    title="treść posta"
    class="grid grid-cols-[auto_clamp(115px,16vw,230px)] gap-y-6 pl-[clamp(115px,16vw,230px)] xl:gap-y-12"
  >
    <div class="grid gap-y-6 xl:gap-y-12">
      <p class="border-b border-black pb-6 text-desktop24 xl:pb-12">
        {post.post_description}
      </p>
      <div
        class=" postContent [&_*]px-0 text-desktop20 leading-[150%] tracking-[-0.2px] [&:p]:py-2 [&_*]:block [&_b]:px-0 [&_h1]:text-24 [&_h2]:py-4 [&_h3]:py-2 [&_h4]:py-2 [&_h5]:py-2
        [&_h6]:py-2 [&_strong]:px-0"
      >
        {@html customSanitization(post_content)}
      </div>
      <div class=" text-desktop20 leading-[150%] tracking-[-0.8px] outline">
        Bezsenność towarzyszy mi od kilkunastu lat. Przyszła w nocy, szukając
        schronu. Pozwoliłem jej zostać u siebie tak długo, aż nabierze sił i
        wyruszy dalej. Nie wiedziałem wtedy, że dotarła do celu, a ja
        rozpoczynałem drogę przez mękę. Bezsenność towarzyszy mi od kilkunastu
        lat. Przyszła w nocy, szukając schronu. Pozwoliłem jej zostać u siebie
        tak długo, aż nabierze sił i wyruszy dalej. Nie wiedziałem wtedy, że
        dotarła do celu, a ja rozpoczynałem drogę przez mękę. Przybłęda stawała
        się nie do zniesienia. Przez nią spóźniałem się do pracy i traciłem w
        oczach swoich chlebodawców. Przez nią zaniedbywałem relacje i zasmucałem
        swoich bliskich. Przez nią popadałem w psychozy i nie ufałem sobie. W
        końcu poprosiłem moją namolną współlokatorkę, aby się wyniosła albo
        chociaż dała mi się wyspać. Odpowiedziała na to, że ani jej się śni. Nie
        wierzyłem własnym uszom. Nerwy mi puściły i powtórzyłem swoje życzenie.
        Tym razem w sposób głośny i niecenzuralny. W odpowiedzi usłyszałem
        śmiech. Sardoniczny, drwiący rechot. Później nastała ciemność, a ja
        dalej nie mogłem zasnąć.
      </div>
      <div class=" flex items-center">
        <p class="text-desktop20">
          <span class="pr-1">Data publikacji: </span><span class="font-[700]"
            >{publishDate}</span
          >
        </p>
        <p
          class=" text-desktop14 flex h-6 items-center space-x-2 pl-12 font-bold uppercase"
        >
          <button on:click="{() => alert('oh hi mark!')}">UDOSTĘPNIJ</button>
          <SmallArrowUp />
        </p>
      </div>
    </div>
    <aside class="flex items-center pl-8">
      {#if postSideFoto}
        <img src="{postSideFoto?.source_url}" alt="{''}" />
      {/if}
    </aside>
  </section>

  <section
    title="skontaktuj się ze mną"
    class="mb-12 flex h-[160px] items-center gap-x-4"
  >
    <div class="w-[clamp(115px,16vw,230px)] pr-8">
      <div class=" flex w-full flex-none">
        <img
          class="aspect-[160/200] h-[160px] w-full object-cover"
          src="{globalFoto?.source_url}"
          alt="alt"
        />
      </div>
    </div>

    <div class=" flex flex-col justify-center">
      <p class="h-6 text-desktop16">Autor</p>
      <p class="h-8 text-desktop24 font-bold">Piotr Olejnik</p>
    </div>
    <div class="mt-6 h-12">
      <BigArrowDown />
    </div>
  </section>
</main>
<!--<FooterPostList posts="{posts}" fotos="{fotos}" />-->
