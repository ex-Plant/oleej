<script>
  import { page } from '$app/stores';
  $: console.error($page.error);
</script>

<div
  class="pointer-events-none fixed inset-0 flex flex-col items-center justify-center space-y-2 pt-20"
>
  <h1>{$page.status}: coś jest nie tak...</h1>
  {#if $page.error}
    <h1>{$page.error.message}</h1>
  {/if}
  <a class="pointer-events-auto" href="/"> wróc do bloga </a>
</div>
