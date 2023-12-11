<script lang="ts">
  import HomePageNavigation from '../components/HomePageNavigation.svelte';
  import Home from '../components/Home.svelte';
  import { onMount } from 'svelte';
  import { allPosts, loading, postCategories } from "../store/global";
  import { getClientWidth, md } from "../store/clientWidthStore";

  export let data;

  let mainRef: HTMLElement;
  let top = false;

  onMount(() => {
    allPosts.set(data.allPosts);
    postCategories.set(data.postCategories);
    window.scrollTo(0, 0);
    loading.set(false);
    if (!$md) return;
    window.addEventListener('scroll', checkElementPosition);
  });

  function checkElementPosition() {
    if (!$md) return;
    const rect = mainRef.getBoundingClientRect();
    top = rect.top < 142;
  }

  $: getClientWidth();

</script>

<HomePageNavigation top="{top}" />
<main class="" bind:this="{mainRef}">
  <Home />
</main>
