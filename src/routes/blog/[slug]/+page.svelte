<script lang="ts">
  import type { PageData } from './$types';
  import BlogPostMobile from '../../../components/blogPost/BlogPostMobile.svelte';
  import BlogPostDesktop from '../../../components/blogPost/BlogPostDesktop.svelte';;
  export let data: PageData;
  const { fotos, posts, globalFoto, postData } = data;
  $: postBySlug = postData.postBySlug
  $: postFoto = postData.postFoto
  $: postSideFoto = postData.postSideFoto
</script>

<main class="px-[clamp(20px,8vw,40px)] md:hidden">
  <BlogPostMobile
    postBySlug="{postBySlug}"
    postFoto="{postFoto}"
    globalFoto="{globalFoto}"
  />
</main>
<main class="hidden md:block">
  <BlogPostDesktop
    postBySlug="{postBySlug}"
    postFoto="{postFoto}"
    globalFoto="{globalFoto}"
    posts="{posts}"
    fotos="{fotos}"
    postSideFoto="{postSideFoto}"
  />
</main>
