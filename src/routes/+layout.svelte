<script lang="ts">
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import '../app.css';
  import Spinner from '../components/Spinner.svelte';
  import { navigating, page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';
  import Header from '../components/navigation/Header.svelte';
  import Footer from '../components/footer/Footer.svelte';

  import '@fontsource-variable/noto-sans';
  import '@fontsource-variable/noto-sans/wdth.css';
  import '@fontsource-variable/noto-sans/wdth-italic.css';
  import '@fontsource/courier-prime/400.css';
  import '@fontsource/courier-prime/700.css';
  import '@fontsource/courier-prime/400-italic.css';
  import '@fontsource/courier-prime/700-italic.css';
  import { loading } from '../store/global';

  inject({ mode: dev ? 'development' : 'production' });

  $: homePage = $page.route.id === '/';

  $: if ($navigating) {
    setTimeout(() => {
      loading.set(true);
    }, 100);
  }

  $: if (!$navigating && $loading) {
    loading.set(false);
  }
</script>

<div class=" flex min-h-[100svh] flex-col">
  <Header />
  <div class="{twMerge(homePage ? 'mt-0' : 'mt-20')}">
    {#if $loading} <Spinner /> {/if}
    <slot />
  </div>
  <Footer />
</div>
