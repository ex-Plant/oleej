<script lang="ts">
  import type { PageData } from './$types';
  import BlogPostMobile from '../../../components/blogPost/BlogPostMobile.svelte';
  import BlogPostDesktop from '../../../components/blogPost/BlogPostDesktop.svelte';
  import type { postSlugMapType, PostType } from '../../../types';
  import { postsSlugMap } from '../../../store/BlogPostsStore';
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
  $: readingTimeInMinutes = Math.floor(numberOfWords / 200); // 200 words per minute

  let timeString: string;
  $: if (readingTimeInMinutes < 1) {
    timeString = "mniej niż minutę";
  } else if (readingTimeInMinutes === 1) {
    timeString = "minutę";
  } else if (readingTimeInMinutes >= 2 && readingTimeInMinutes <= 4) {
    timeString = "minuty";
  } else {
    timeString = "minut";
  }


  function setPostSlugMap(posts: PostType[]) {
    const newMap: postSlugMapType = {};

    posts.forEach((post, index) => {
      newMap[post.acf.slug] = {
        slug: post.acf.slug,
        index: index
      };
    });
    return newMap;
  }

  $: postsSlugMap.set(setPostSlugMap(posts));

</script>

<main class="px-[clamp(20px,6vw,40px)] md:hidden">
  <BlogPostMobile
    postBySlug="{postBySlug}"
    postFoto="{postFotoMobile}"
    globalFoto="{globalFoto}"
    timeString='{timeString}'
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
    timeString='{timeString}'
  />
</main>
