<script lang="ts">
  import type { PageData } from './$types';
  import BlogPostMobile from '../../../components/blogPost/BlogPostMobile.svelte';
  import BlogPostDesktop from '../../../components/blogPost/BlogPostDesktop.svelte';
  export let data: PageData;
  $: posts = data.posts;
  $: globalFoto = data.globalFoto;
  $: postData = data.postData;
  $: fotos = data.fotos;
  $: postBySlug = postData.postBySlug;
  $: postFotoMobile = postData.postFotoMobile;
  $: postFotoDesktop = postData.postFotoDesktop;
  $: postSideFoto = postData.postSideFoto;
  $: post_content = postBySlug.acf.post_content;

  function countWords(text: string) {
    return text.split(/\s+/).length;
  }
  $: numberOfWords = countWords(post_content);
  $: readingTimeInMinutes = Math.floor(numberOfWords / 200);   // 200 words per minute
</script>

<main class="px-[clamp(20px,6vw,40px)] md:hidden">
  <BlogPostMobile
    postBySlug="{postBySlug}"
    postFoto="{postFotoMobile}"
    globalFoto="{globalFoto}"
    readingTimeInMinutes="{readingTimeInMinutes}"
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
    readingTimeInMinutes="{readingTimeInMinutes}"
  />
</main>
