<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { onMount } from 'svelte';
  let contentRef: HTMLElement;
  let height = 0;
  let isOpen = false;
  onMount(() => (height = contentRef.offsetHeight));
</script>
