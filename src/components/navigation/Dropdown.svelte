<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { onMount } from 'svelte';
  let contentRef: HTMLElement;
  let height = 0;
  let isOpen = false;
  onMount(() => (height = contentRef.offsetHeight));
</script>

<button
  class="w-full text-left uppercase"
  on:click="{() => (isOpen = !isOpen)}"
>
  [ menu ]
</button>
<div
  class="{twMerge('overflow-hidden duration-500')}"
  style="height: {isOpen ? `${height}px` : '0'}"
>
  <div class="flex flex-col" bind:this="{contentRef}">
    <a class="uppercase" href="/">blog</a>
    <a class="uppercase" href="/">o mnie</a>
    <a class="uppercase" href="/">kontakt</a>
    <a class="uppercase" href="/">szukaj</a>
  </div>
</div>
