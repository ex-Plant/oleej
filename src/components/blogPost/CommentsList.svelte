<script>
  export let comments = [];
</script>

<div class="mt-12 grid gap-4 md:hidden">
  {#each comments as comment}
      <div class='grid grid-cols-[20px_auto] gap-x-3 items-center'>
        <div class="aspect-square w-[20px] grow-0 bg-[#D9D9D9]"></div>
        <div class="flex h-[33px] items-center text-[1rem] font-bold">
          <span>
            {comment.author_name}
          </span>
        </div>
      </div>
      <div>

        <div class="text-[0.875rem]">{@html comment.content.rendered}</div>
      </div>
  {/each}
</div>

<div class="mt-12 hidden gap-4 md:grid">
  {#each comments as comment}
    <div class="grid grid-cols-[55px_auto] gap-x-2">
      <div class="aspect-square w-[33px] grow-0 bg-[#D9D9D9]"></div>
      <div>
        <div class="flex h-[33px] items-center text-[1.25rem] font-bold">
          <span>
            {comment.author_name}
          </span>
        </div>
        <div class="text-[1.25rem]">{@html comment.content.rendered}</div>
      </div>
    </div>
  {/each}
</div>
