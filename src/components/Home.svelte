<script lang="ts">
  import { activePostCat, blogPost_mobile_fotosStore } from '../store/global';
  import BlogPostCard from './BlogPostCard.svelte';
  import type { ImageType, PostType } from '../types';
  import { allPostsStore } from '../store/global.js';

  $: allPosts = $allPostsStore.posts;
  let images: ImageType[];
  $: images = $blogPost_mobile_fotosStore;
  let postsFilteredByCategory: PostType[] = [];

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
  class="px-primary mb-16 grid max-w-[1440px] xl:mx-auto"
>
  {#each postsFilteredByCategory as post (post.id)}
    <BlogPostCard
      post="{post}"
      postImage="{images.find((img) => post.acf.mobile_foto_id === img.id) ??
        undefined}"
    />
  {/each}
</section>
