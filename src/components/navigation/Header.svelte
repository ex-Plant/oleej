<script lang="ts">
  import HeaderDesktop from './HeaderDesktop.svelte';
  import HeaderMobile from './HeaderMobile.svelte';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';
  $: homePage = $page.route.id === '/';
</script>

<div class="{twMerge(homePage && 'hidden')}">
  <div class="{'hidden md:block'}">
    <HeaderDesktop top/>
  </div>
  <div class="md:hidden">
    <HeaderMobile top/>
  </div>
</div>
