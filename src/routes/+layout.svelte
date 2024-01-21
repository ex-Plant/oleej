<script lang="ts">
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import '../app.css';
  import { fade } from 'svelte/transition';
  import Header from '../components/navigation/Header.svelte';
  import Footer from '../components/footer/Footer.svelte';
  import Spinner from '../components/Spinner.svelte';
  import { navigating, page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';

  inject({ mode: dev ? 'development' : 'production' });

  $: homePage = $page.route.id === '/';
</script>

<div class=" flex min-h-[100svh] flex-col">
  <Header />
  <div
    in:fade="{{ duration: 500 }}"
    out:fade="{{ duration: 500 }}"
    class="{twMerge(homePage ? 'mt-0' : 'mt-20')}"
  >
    {#if $navigating} <Spinner /> {/if}

    <slot />
  </div>
  <Footer />
</div>
