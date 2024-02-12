<script lang="ts">
  import BlogPostMobile from '../../../components/blogPost/BlogPostMobile.svelte';
  import BlogPostDesktop from '../../../components/blogPost/BlogPostDesktop.svelte';
  import { page } from '$app/stores';
  import type { PostType } from '../../../types';

  $: slug = $page.params.slug;
  const posts = $page.data.allPosts.posts;


  let post: PostType
  $: if (slug) {
    console.log('here')
    post = posts?.find((post: PostType) => post.slug === slug);
  }
  $: post_content = post.acf?.post_content;

  function countWords(text: string) {
    return text?.split(/\s+/).length;
  }
  //
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

{#if post}
  <main class="px-[clamp(20px,6vw,40px)] md:hidden">
    <BlogPostMobile
      postData="{post}"
      timeString="{timeString}"
      post_content="{post_content}"
    />
  </main>
  <main class="hidden md:block">
    <BlogPostDesktop
      post_content="{post_content}"
      postData="{post}"
      timeString="{timeString}"
    />
  </main>
{/if}
