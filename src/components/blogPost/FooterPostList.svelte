<script lang="ts">
  import type { ImageType, PostType } from '../../types';
  import FooterPostCard from './FooterPostCard.svelte';
  import { page } from "$app/stores";

  const posts:PostType[] = $page.data.allPosts?.posts;
  const images: ImageType[] = $page.data.images;

  //sort posts by date
 const sorted = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

 const lastPosts = sorted.slice(0, 4);

</script>

{#if lastPosts?.length > 0}
  <section class=" border-t-[2px] border-black">
    <div
      class=" px-primary mx-auto grid max-w-[1440px] grid-cols-3 gap-x-12 gap-y-12 py-12"
    >
      {#each lastPosts as post (post.id)}
        <FooterPostCard
          post="{post}"
          postImage="{images.find((img) => post.acf.mobile_foto_id === img.id)}"
        />
      {/each}
    </div>
  </section>
{/if}
