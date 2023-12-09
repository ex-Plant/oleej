<script lang="ts">
  import HomePageNavigation from '../components/HomePageNavigation.svelte';
  import Home from "../components/Home.svelte";
  import type { ImageType, PostType } from "../types";
  export let data;
  let posts: PostType[] = data.posts;
  let fotos:ImageType[] = data.fotos;
  let categories: string[] = posts.map(posts => posts.acf.category);
  categories = [...new Set(categories)];



</script>

<main class='px-primary'>
  <HomePageNavigation posts={posts} {categories}/>
  <Home {posts} {fotos}/>
</main>
