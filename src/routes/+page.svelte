<script lang="ts">
  import HomePageNavigation from '../components/HomePageNavigation.svelte';
  import Home from '../components/Home.svelte';
  import { onDestroy, onMount } from "svelte";
  import { getClientWidth, md } from "../store/clientWidthStore";
  import { browser } from "$app/environment";

  let mainRef: HTMLElement;
  let top = false;

  onMount(() => {
    if (!$md) return;
    window.addEventListener('scroll', checkElementPosition);
  });

  function checkElementPosition() {
    if (!$md) return;
    const rect = mainRef.getBoundingClientRect();
    top = rect.top < 142;
  }

  $: getClientWidth();

  onDestroy(() => {
    if (browser) {
    window.removeEventListener('scroll', checkElementPosition);
    }
  });

</script>

<HomePageNavigation top="{top}" />
<main class="" bind:this="{mainRef}">
  <Home />
</main>
