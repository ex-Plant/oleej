<script lang="ts">
  import { activePostCat, testString } from '../store/global';
  import BlogPostCard from './BlogPostCard.svelte';
  import type { PostType } from '../types';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  const allPosts = $page?.data?.allPosts;
  let postsFilteredByCategory: PostType[] = [];

  $: if ($activePostCat === '') {
    postsFilteredByCategory = allPosts.posts;
  } else {
    postsFilteredByCategory = allPosts.posts.filter((post: PostType) => post.acf.category === $activePostCat);
  }

  onMount(() => {
    testString.set('Blog');
  });
</script>

<section class="px-primary mb-16 grid max-w-[1440px] xl:mx-auto">
  {#if postsFilteredByCategory.length > 0}
    {#each postsFilteredByCategory as post, index (post.id)}
      <BlogPostCard post="{post}" index="{index}" />
    {/each}
  {/if}
</section>
