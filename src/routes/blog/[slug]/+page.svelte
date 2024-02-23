<script lang="ts">
  import BlogPostMobile from '../../../components/blogPost/BlogPostMobile.svelte';
  import BlogPostDesktop from '../../../components/blogPost/BlogPostDesktop.svelte';
  import { fade } from 'svelte/transition';
  import type { PostResponse } from "../../../types";

  export let data;
  const post: PostResponse = data.test;
  const postData = post.data.post;
  const { blogPost, title, date } = postData;
  console.log(date)

  //only for calculating reading time!!
  const content = blogPost.postContent + blogPost.postContentSecond + blogPost.postContentThird;

  function countWords(text: string) {
    return text?.split(/\s+/).length;
  }
  //
  $: numberOfWords = countWords(content);
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

<div in:fade="{{ duration: 500 }}">
  <main class="px-[clamp(20px,6vw,40px)] md:hidden">
    <BlogPostMobile {timeString} {blogPost} {title} {date}/>
  </main>
  <main class="hidden md:block">
    <BlogPostDesktop {timeString} {postData} />
  </main>
</div>
