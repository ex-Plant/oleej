<script lang="ts">
  import type { PageData } from './$types';
  import BlogPostMobile from "../../../components/blogPost/BlogPostMobile.svelte";
  import BlogPostDesktop from "../../../components/blogPost/BlogPostDesktop.svelte";
  export let data: PageData;
  const {postBySlug } = data;
  if (!postBySlug) {
    throw new Error('Missing post data');
  }
</script>

<main class='md:hidden'>
  <BlogPostMobile {data} />
</main>
<main class='hidden md:block'>
  <BlogPostDesktop {data} />
</main>
