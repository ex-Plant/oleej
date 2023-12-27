<script lang="ts">
  import { activePostCat } from '../store/global';
  import BlogPostCard from './BlogPostCard.svelte';
  import { page } from '$app/stores';
  import type { ImageType, PostType } from "../types";

  $: data = $page.data.allPosts;
  let images: ImageType[]
  $: images = data?.imagesData;
  let postsFilteredByCategory: PostType[] = [];

  $: if ($activePostCat === '') {
    postsFilteredByCategory = data?.allPosts;
  } else {
    postsFilteredByCategory = data?.allPosts.filter(
      (post: PostType) => post.acf.category === $activePostCat,
    );
  }

</script>

<section
  title="lista artykułów"
  class="px-primary mb-16 mt-8 grid max-w-[1440px] md:mt-16 xl:mx-auto"
>
  {#each postsFilteredByCategory as post}
    <BlogPostCard
      post="{post}"
      postImage="{images.find((img) => post.acf.mobile_foto_id === img.id) ?? undefined }"
    />
  {/each}
</section>
