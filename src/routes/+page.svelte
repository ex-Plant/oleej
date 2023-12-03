<script lang="ts">
  import HomePageNavigation from '../components/HomePageNavigation.svelte';
  import Home from "../components/Home.svelte";
  import type { Category, ImageType, PostType } from "../types";
  export let data;
  let posts: PostType[] = data.posts;
  let fotos:ImageType[] = data.fotos;
  let categories: Category[] = data.categories;
</script>

<main class='px-primary'>
  <HomePageNavigation posts={posts} {categories}/>
  <Home {posts} {fotos}/>
</main>
