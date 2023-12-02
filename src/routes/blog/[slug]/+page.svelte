<script lang="ts">
  import type { PageData } from './$types';
  import BlogPostMobile from '../../../components/blogPost/BlogPostMobile.svelte';
  import BlogPostDesktop from '../../../components/blogPost/BlogPostDesktop.svelte';;
  export let data: PageData;
  const { fotos, posts, globalFoto, postData } = data;
  $: postBySlug = postData?.postBySlug
  $: postFotoMobile = postData?.postFotoMobile
  $: postFotoDesktop = postData?.postFotoDesktop
  $: postSideFoto = postData?.postSideFoto
</script>

<main class="px-[clamp(20px,8vw,40px)] md:hidden">
  <BlogPostMobile
    postBySlug="{postBySlug}"
    postFoto="{postFotoMobile}"
    globalFoto="{globalFoto}"
  />
</main>
<main class="hidden md:block">
  <BlogPostDesktop
    postBySlug="{postBySlug}"
    postFoto="{postFotoDesktop}"
    globalFoto="{globalFoto}"
    posts="{posts}"
    fotos="{fotos}"
    postSideFoto="{postSideFoto}"
  />
</main>
