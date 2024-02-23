<script lang="ts">
  import FooterPostCard from './FooterPostCard.svelte';
  import { page } from '$app/stores';
  import type { PostType } from '../../types';

  const allPosts: PostType[] = $page.data.post.data.posts.nodes;

  const sorted = allPosts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })

  //get four filter out the current post and get the first three
  const lastPosts = sorted.slice(0, 4).filter((post) => post.slug !== $page.params.slug).slice(0, 3);
</script>

{#if lastPosts?.length > 0}
  <section class=" border-t-[2px] border-black">
    <div class=" px-primary mx-auto grid max-w-[1440px] grid-cols-3 gap-x-12 gap-y-12 py-12">
      {#each lastPosts as post (post.id)}
        <FooterPostCard post="{post}" />
      {/each}
    </div>
  </section>
{/if}
