<script lang="ts">
  import { page } from '$app/stores';
  import GoToBtn from "../assets/GoToBtn.svelte";
  $: console.error($page.error);
</script>

<div
  class=" fixed inset-0 flex flex-col items-center justify-center space-y-4 pt-20 bg-primary"
>
  <p>Oj, coś tu nie pykło...</p>
  <p>Ale teraz na pewno się uda!</p>

  <a href="/" class=" cursor-pointer ">
    <div class='flex items-center justify-center  space-x-4'>
      <span> Wróć do bloga </span>
      <div class='animate-bounce duration-1000'>
        <GoToBtn />
      </div>
    </div>
  </a>
</div>
