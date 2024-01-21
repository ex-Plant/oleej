<script lang="ts">
  import HeaderDesktop from './HeaderDesktop.svelte';
  import HeaderMobile from './HeaderMobile.svelte';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';
  $: homePage = $page.route.id === '/';

  let opened = false;
</script>

<div class="{twMerge(homePage && 'hidden')}">
  <div class="{'hidden md:block'}">
    <HeaderDesktop />
  </div>
  <div class="md:hidden">
    <HeaderMobile {opened}/>
  </div>
</div>
