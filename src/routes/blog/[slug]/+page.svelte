<script lang="ts">
  import BlogPostMobile from '../../../components/blogPost/BlogPostMobile.svelte';
  import BlogPostDesktop from '../../../components/blogPost/BlogPostDesktop.svelte';
  import { fade } from 'svelte/transition';
  import type { PostResponse } from '../../../types';

  export let data;
  const aboutMeImage = data?.post?.data?.page?.featuredImage?.node;
  $: post = data.post as PostResponse;
  $: postData = post.data.post;
  $: blogPost = postData.blogPost;
  $: title = postData.title;
  $: date = postData.date;

  console.log(data)

  //only for calculating reading time!!
  $: content = blogPost?.postContent + blogPost?.postContentSecond + blogPost?.postContentThird + '';
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

  function countWords(text: string) {
    return text?.split(/\s+/).length;
  }
</script>

<div in:fade="{{ duration: 500 }}">
    {#key data.post.data.post.id}
      <div in:fade="{{ duration: 500 }}">
        <main class="px-[clamp(20px,6vw,40px)] md:hidden">
          <BlogPostMobile
            timeString="{timeString}"
            blogPost="{blogPost}"
            title="{title}"
            date="{date}"
            aboutMeImage="{aboutMeImage}"
          />
        </main>
        <main class="hidden md:block">
          <BlogPostDesktop
            timeString="{timeString}"
            blogPost="{blogPost}"
            title="{title}"
            date="{date}"
            aboutMeImage="{aboutMeImage}"
          />
        </main>
      </div>
    {/key}
</div>
