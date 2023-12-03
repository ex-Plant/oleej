<script lang="ts">
  import HomePageNavigation from '../components/HomePageNavigation.svelte';
  import Home from "../components/Home.svelte";
  export let data;
  let posts = data.posts;
  let fotos = data.fotos;
</script>

<main class='px-primary'>
  <HomePageNavigation posts={posts} />
  <Home {posts} {fotos}/>
</main>
