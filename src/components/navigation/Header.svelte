<script lang="ts">
  import Logo from '../../assets/Logo.svelte';
  // import Dropdown from './Dropdown.svelte';
  // import { twMerge } from 'tailwind-merge';
  // import { onMount } from 'svelte';
  // let contentRef: HTMLElement;
  // let height = 0;
  // let isOpen = false;
  // onMount(() => (height = contentRef.offsetHeight));
</script>

<div
  class=" px-primary fixed left-0 top-0 mx-auto flex h-[120px] w-full  bg-white"
>
  <div class="flex w-full items-center justify-between border-b border-black">
    <button
      class="w-full text-left text-24 uppercase"
      on:click="{() => alert('coming soon')}"
    >
      [ menu ]
    </button>
    <a href='/' class=" flex h-full">
      <Logo />
    </a>
  </div>
</div>
