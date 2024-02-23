<script lang="ts">
  import { activePostCat } from '../store/global';
  import BlogPostCard from './BlogPostCard.svelte';
  import type { PostType } from '../types';
  import { page } from '$app/stores';
  const allPosts = $page?.data?.allPosts;
  let postsFilteredByCategory: PostType[] = [];

  const posts = allPosts.data.posts.nodes

  $: if ($activePostCat === '') {
    postsFilteredByCategory = posts;
  } else {
    postsFilteredByCategory = posts.filter((post: PostType) => post.blogPost.category === $activePostCat);
  }

</script>

<section class="px-primary mb-16 grid max-w-[1440px] xl:mx-auto">
  {#if postsFilteredByCategory.length > 0}
    {#each postsFilteredByCategory as post, index (post.id)}
      <BlogPostCard post="{post}" index="{index}" />
    {/each}
  {/if}
</section>
