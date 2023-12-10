<script lang="ts">
  import HomePageNavigation from '../components/HomePageNavigation.svelte';
  import Home from '../components/Home.svelte';
  import type { ImageType, PostType } from '../types';
  import { onMount } from 'svelte';
  export let data;
  let posts: PostType[] = data.posts;
  let fotos: ImageType[] = data.fotos;
  let categories: string[] = posts.map((posts) => posts.acf.category);
  categories = [...new Set(categories)];

  let mainRef: HTMLElement;

  let top = false;
  function checkElementPosition() {
    const rect = mainRef.getBoundingClientRect();
    top = rect.top < 142;

  }

  onMount(() => {
    window.addEventListener('scroll', checkElementPosition);

    return () => {
      window.removeEventListener('scroll', checkElementPosition);
    };
  });
</script>

<HomePageNavigation categories="{categories}" {top}/>
<main bind:this={mainRef} >
  <Home posts="{posts}" fotos="{fotos}" />
</main>
