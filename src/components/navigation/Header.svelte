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
  class=" px-primary fixed left-0 top-0 mx-auto flex min-h-[120px] w-full bg-primary"
>
  <nav
    class="no-scrollbar flex h-20 w-full items-center justify-between overflow-x-scroll border-b border-black"
  >
    <div class="pr-4">
      <a class="flex h-20 w-[130px]" href="/"> <Logo /></a>
    </div>
    <div
      class="xl:space-x-z flex gap-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 [&_button]:uppercase"
    >
      <button on:click="{() => alert('21:37')}" class="group relative">
        <a href="/">Blog</a>
        <span
          class="{'absolute bottom-[-3px] left-[50%] h-[1px] w-0 rounded bg-black duration-300' +
            ' group-hover:left-0 group-hover:w-full'}"></span>
      </button>

<!--      <button on:click="{() => alert('21:37')}" class="group relative">-->
<!--        <a class="whitespace-nowrap" href="#">O mnie</a>-->
<!--        <span-->
<!--          class="{'absolute bottom-[-3px] left-[50%] h-[1px] w-0 rounded bg-black duration-300' +-->
<!--            ' group-hover:left-0 group-hover:w-full'}"></span>-->
<!--      </button>-->
<!--      <button on:click="{() => alert('21:37')}" class="group relative">-->
<!--        <a href="/">Kontakt</a>-->
<!--        <span-->
<!--          class="{'absolute bottom-[-3px] left-[50%] h-[1px] w-0 rounded bg-black duration-300' +-->
<!--            ' group-hover:left-0 group-hover:w-full'}"></span>-->
<!--      </button>-->
<!--      <button on:click="{() => alert('21:37')}" class="group relative">-->
<!--        <a href="#">Szukaj</a>-->
<!--        <span-->
<!--          class="{'absolute bottom-[-3px] left-[50%] h-[1px] w-0 rounded bg-black duration-300' +-->
<!--            ' group-hover:left-0 group-hover:w-full'}"></span>-->
<!--      </button>-->
    </div>
  </nav>
  <!--    <button-->
  <!--      class="w-full text-left text-24 uppercase"-->
  <!--      on:click="{() => alert('coming soon')}"-->
  <!--    >-->
  <!--      [ menu ]-->
  <!--    </button>-->
</div>
