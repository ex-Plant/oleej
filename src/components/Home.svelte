<script lang="ts">
  import { currentCategory } from '../store/HomeStore';
  import { allPosts } from '../store/global';
  import BlogPostCard from "./BlogPostCard.svelte";

  $: postsFilteredByCategory = $allPosts;

  $: if ($currentCategory === '') {
    postsFilteredByCategory = $allPosts;
  } else {
    postsFilteredByCategory = $allPosts.filter(
      (post) => post.acf.category === $currentCategory,
    );
  }


</script>

<section
  title="lista artykułów"
  class="px-primary mb-16 mt-8 grid max-w-[1440px] md:mt-16 xl:mx-auto"
>
  {#each postsFilteredByCategory as post (post.id) }
    <BlogPostCard {post}/>
  {/each}
</section>
