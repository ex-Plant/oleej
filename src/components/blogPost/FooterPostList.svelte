<script lang="ts">
  import {
    activePostCat,
    allPostsStore,
    blogPost_mobile_fotosStore,
  } from '../../store/global';
  import type { ImageType, PostType } from '../../types';
  import FooterPostCard from './FooterPostCard.svelte';

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

<section class="px-primary mx-auto max-w-[1440px]">
  <div
    class=" grid grid-cols-3 border-t border-black py-12 gap-x-12 gap-y-12"
  >
    {#each postsFilteredByCategory as post (post.id)}
        <FooterPostCard
          post="{post}"
          postImage="{images.find((img) => post.acf.mobile_foto_id === img.id)}"
        />
    {/each}
  </div>
</section>
