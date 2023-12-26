<script lang="ts">
  import { activePostCat } from '../store/global';
  import BlogPostCard from './BlogPostCard.svelte';
  import { page } from '$app/stores';
  import type { PostType } from '../types';

  $: allPosts = $page.data.allPosts;
  $: postsFilteredByCategory = allPosts;

  $: if ($activePostCat === '') {
    postsFilteredByCategory = allPosts;
  } else {
    postsFilteredByCategory = allPosts.filter(
      (post: PostType) => post.acf.category === $activePostCat,
    );
  }
</script>

<section
  title="lista artykułów"
  class="px-primary mb-16 mt-8 grid max-w-[1440px] md:mt-16 xl:mx-auto"
>
  {#each postsFilteredByCategory as post}
    <BlogPostCard post="{post}" />
  {/each}
</section>
