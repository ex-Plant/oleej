<script lang="ts">
  import HomePageNavigation from '../components/HomePageNavigation.svelte';
  import Home from '../components/Home.svelte';
  import type { ImageType, PostType } from '../types';
  import { onMount } from 'svelte';
  import { loading } from '../store/global';
  import { getClientWidth, md } from "../store/clientWidthStore";
  export let data;
  let posts: PostType[] = data.posts;
  let fotos: ImageType[] = data.fotos;
  let categories: string[] = posts.map((posts) => posts.acf.category);
  categories = [...new Set(categories)];

  let mainRef: HTMLElement;
  let top = false;
  function checkElementPosition() {
    if (!$md) return;
    const rect = mainRef.getBoundingClientRect();
    top = rect.top < 142;
  }

  onMount(() => {
    window.scrollTo(0, 0);
    loading.set(false);
    if (!$md) return;
    window.addEventListener('scroll', checkElementPosition);
  });

  $: getClientWidth();
</script>

<HomePageNavigation categories="{categories}" top="{top}" />
<main class="" bind:this="{mainRef}">
  <Home posts="{posts}" fotos="{fotos}" />
</main>
