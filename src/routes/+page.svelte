<script lang="ts">
  import Home from '../components/Home.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { getClientWidth } from '../store/clientWidthStore';
  import { browser } from '$app/environment';
  import HeaderMobile from '../components/navigation/HeaderMobile.svelte';
  import HeaderDesktop from '../components/navigation/HeaderDesktop.svelte';
  import { twMerge } from 'tailwind-merge';
  import LogoSectionMobile from '../components/LogoSectionMobile.svelte';
  import LogoSectionDesktop from '../components/LogoSectionDesktop.svelte';
  import { fade } from 'svelte/transition';


  let mainRef: HTMLElement;
  let top = false;

  function checkElementPosition() {
    const rect = mainRef.getBoundingClientRect();
    top = rect.top < 80;
  }

  $: getClientWidth();

  onMount(() => {
    window.addEventListener('scroll', checkElementPosition);
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('scroll', checkElementPosition);
    }
  });


</script>

<div in:fade="{{ duration: 200 }}">
<!-- visible after scrolling down-->
<div class="{twMerge('md:hidden')}">
  <HeaderMobile top="{top}" />
</div>
<div class="{'hidden md:block'}">
  <HeaderDesktop top="{top}" />
</div>

<LogoSectionMobile />
<LogoSectionDesktop />

<main class="" bind:this="{mainRef}">
  <Home />
</main>
</div>
