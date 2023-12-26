<script lang="ts">
  //  on your WordPress backend
  import '../app.css';
  import { fade } from 'svelte/transition';
  import Header from '../components/navigation/Header.svelte';
  import Footer from '../components/footer/Footer.svelte';
  import Spinner from '../components/Spinner.svelte';
  import { navigating } from '$app/stores';
</script>

<div class=" flex min-h-[100svh] flex-col">
  <Header />
  <div
    in:fade="{{ duration: 500 }}"
    out:fade="{{ duration: 500 }}"
    class=" mt-20"
  >
    {#if $navigating} <Spinner /> {/if}

    <slot />
  </div>
  <Footer />
</div>
