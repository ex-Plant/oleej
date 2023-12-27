<script lang="ts">
  import type { PageData } from './$types';
  import BlogPostMobile from '../../../components/blogPost/BlogPostMobile.svelte';
  import BlogPostDesktop from '../../../components/blogPost/BlogPostDesktop.svelte';
  export let data: PageData;
  const post = data?.post;

  const globalFoto = data?.globalFoto;
  $: postFotoMobile = post?.mobile_foto;
  $: postFotoDesktop = post?.blog_desktop_foto;
  $: postSideFoto = post?.blog_right_side_foto;
  $: post_content = post.postData?.acf?.post_content;

  function countWords(text: string) {
    return text?.split(/\s+/).length;
  }

  $: numberOfWords = countWords(post_content);
  $: readingTimeInMinutes = Math.floor(numberOfWords / 200); // 200 words per minute
  let timeString: string;

  $: if (readingTimeInMinutes < 1) {
    timeString = 'mniej niż minutę';
  } else if (readingTimeInMinutes === 1) {
    timeString = 'minutę';
  } else if (readingTimeInMinutes >= 2 && readingTimeInMinutes <= 4) {
    timeString = ` ${readingTimeInMinutes} minuty`;
  } else {
    timeString = `${readingTimeInMinutes} minut`;
  }
</script>

{#if post?.postData}
  <main class="px-[clamp(20px,6vw,40px)] md:hidden">
    <BlogPostMobile
      postData="{post.postData}"
      postFoto="{postFotoMobile}"
      globalFoto="{globalFoto}"
      timeString="{timeString}"
      post_content="{post_content}"
    />
  </main>
  <main class="hidden md:block">
    <BlogPostDesktop
      post_content="{post_content}"
      postData="{post.postData}"
      postFoto="{postFotoDesktop}"
      globalFoto="{globalFoto}"
      postSideFoto="{postSideFoto}"
      timeString="{timeString}"
    />
  </main>
{/if}
