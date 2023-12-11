<script lang="ts">
  import type { PageData } from './$types';
  import BlogPostMobile from '../../../components/blogPost/BlogPostMobile.svelte';
  import BlogPostDesktop from '../../../components/blogPost/BlogPostDesktop.svelte';
  export let data: PageData;
  $: globalFoto = data.globalFoto;
  $: postData = data.postData;
  $: postFotoMobile = data.postFotoMobile;
  $: postFotoDesktop = data.postFotoDesktop;
  $: postSideFoto = data.postSideFoto;
  $: post_content = postData.acf.post_content;

  function countWords(text: string) {
    return text.split(/\s+/).length;
  }

  $: numberOfWords = countWords(post_content);
  $: readingTimeInMinutes = Math.floor(numberOfWords / 200); // 200 words per minute
  let timeString: string;

  $: if (readingTimeInMinutes < 1) {
    timeString = "mniej niż minutę";

  } else if (readingTimeInMinutes === 1) {
    timeString = "minutę";

  } else if (readingTimeInMinutes >= 2 && readingTimeInMinutes <= 4) {
    timeString = ` ${readingTimeInMinutes} minuty`;

  } else {
    timeString = `${readingTimeInMinutes} minut`;
  };


</script>

<main class="px-[clamp(20px,6vw,40px)] md:hidden">
  <BlogPostMobile
    postData="{postData}"
    postFoto="{postFotoMobile}"
    globalFoto="{globalFoto}"
    timeString='{timeString}'
  />
</main>
<main class="hidden md:block">
  <BlogPostDesktop
    postData="{postData}"
    postFoto="{postFotoDesktop}"
    globalFoto="{globalFoto}"
    postSideFoto="{postSideFoto}"
    timeString='{timeString}'
  />
</main>
